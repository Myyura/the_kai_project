---
sidebar_label: "2024年8月実施 問題IV（情報工学）"
tags:
  - Chuo-University
  - Computer-Science.Graphics.Line-Segment-Intersection
---

# 中央大学 理工学研究科 情報工学専攻 2024年8月実施 問題IV

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題 I は必答。問題 II～V のうち，2 問を選んで解答すること。

下記の C++ プログラムは多角形の自己交差を解消する `untangle` 関数（動作例は下図）を実装したものである。`Point` は平面上の点を表すクラスで，`std::vector<Point>` は `Point` 型の要素を持つ動的配列である。なお，型名の後ろの「`&`」は参照を意味する。このプログラムでは，多角形は `std::vector<Point>` を用いて表現される。`std::vector<Point>` 型の変数 P に $n$ 個の点 $p_0,p_1,\ldots,p_{n-1}$ が格納されているとき（$p_i$ は `P[i]` に格納される），P を $n$ 個の線分 $p_0p_1,p_1p_2,\ldots,p_{n-2}p_{n-1},p_{n-1}p_0$ からなる多角形とみなす。

![untangle関数の動作例](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202408_senmon_IV_example.png)

二つの線分は，それらの内部（線分から端点を除いた部分）に共通部分があるとき，交差するという。また，多角形を構成する線分が交差するとき，その多角形は自己交差を持つという。本問題では，多角形はどの 3 頂点も同一直線上にないものとする。さらに，計算誤差やオーバーフローは発生しないものとする。以下の設問 1～5 を答えよ。

```cpp
#include <vector>

struct Point { double x; double y; };

double sgn(double z) { return z > 0.0 ? 1.0 : (z < 0.0 ? -1.0 : 0.0); }
double ted(Point a, Point b) { return a.y * b.x - a.x * b.y; }

// 引数の a, b, c は同一直線上にないことを仮定する。
// a, b を通る直線は平面を二つの領域に分ける。
// 点 c がどちらの領域にあるかに応じて、1 または -1 を返す。
int pred(Point a, Point b, Point c) {
    return sgn(ted(a, b) + ted(b, c) + ted(c, a));
}

// 引数の a, b, c, d は、どの 3 点も同一直線上にないことを仮定する。
// 線分 ab と線分 cd が交差する場合は true、交差しない場合は false を返す。
bool test_seg_seg(Point a, Point b, Point c, Point d) { 【①】 }

// P[i], P[i+1] を結ぶ線分 s_i と P[j], P[(j+1)%n] を結ぶ線分 s_j が
// 交差していると仮定し（n は P の頂点数）、i < j も仮定する。
// s_i と s_j をつなぎ変えて（添え字が i+1 以上 j 以下の範囲にある
// P の要素を逆順に並び替えて）、線分の交差を解消する。
void swap_edges(std::vector<Point>& P, int i, int j) { 【②】 }

// 多角形（どの 3 頂点も同一直線上にないことを仮定）が交差する線分対を
// 持つ場合は true、持たない場合は false を返す。
// 交差する線分対を持つときは idx1 と idx2 の更新も行う。
// このとき idx1 < idx2 となるようにする。
bool has_intersection(std::vector<Point>& P, int& idx1, int& idx2) {
    int n = P.size();
    for (int i = 0; i < n; ++i)
        for (int j = i + 1; j < n; ++j)
            if (test_seg_seg(P[i], P[i+1], P[j], P[(j+1)%n])) {
                idx1 = i; idx2 = j; return true;
            }
    return false;
}

// 自己交差を持つ多角形（どの 3 頂点も同一直線上にないことを仮定）
// の交差を解消する。
void untangle(std::vector<Point>& P) {
    int i; int j;
    while (has_intersection(P, i, j)) swap_edges(P, i, j);
}
```

1. 四点 $a_1,b_1,c_1,d_1$ の座標をそれぞれ $(0,0),(3,3),(3,0),(1,2)$ としたとき，`pred(a₁,b₁,c₁)`，`pred(a₁,b₁,d₁)`，`pred(c₁,d₁,a₁)`，`pred(c₁,d₁,b₁)` の戻り値を計算せよ。結果のみ答えればよい。
2. `test_seg_seg` 関数の直前にあるコメント通りに動作するように，プログラムの ① の部分を作成せよ（仮定を満たす引数に対して正しく動作すればよい）。関数の中身は複数行あってもよい。`sgn`，`ted`，`pred` 関数を使用してもよい。
3. `swap_edges` 関数は「添え字が i+1 以上 j 以下の範囲にある P の要素を逆順に並び替える」という操作をするだけの関数である。プログラムの ② の部分を作成せよ。関数の中身は複数行あってもよい。
4. `has_intersection` 関数内で `test_seg_seg` 関数は繰り返し呼び出されるが，その呼び出しの一部で不適切な引数が使用される。（`test_seg_seg` 関数の実装によっては，これが原因で `untangle` 関数内に無限ループが発生する。）どのような引数が不適切なのか，またそれを防ぐには `has_intersection` 関数をどう修正すればよいか説明せよ。
5. `swap_edges` 関数を実行すると，多角形の周長（全ての線分の長さの和）が真に減少することを証明せよ。まず，四点 `P[i]`，`P[i+1]`，`P[j]`，`P[(j+1)%n]` をそれぞれ $a,b,c,d$ とおく。そして，線分 $ab$ と線分 $cd$ の交点を $g$ とおき，三角不等式を用いるとよい。

#### 题目描述

问题 I 必答；问题 II～V 中选答 2 题。

上述 C++ 程序实现了消除多边形自交的 `untangle` 函数，运行示例如上图。`Point` 是表示平面上点的类，`std::vector<Point>` 是元素类型为 `Point` 的动态数组。类型名后的 `&` 表示引用。程序用 `std::vector<Point>` 表示多边形：当变量 P 中存有 $n$ 个点 $p_0,p_1,\ldots,p_{n-1}$（$p_i$ 存放在 `P[i]` 中）时，将 P 视为由 $n$ 条线段 $p_0p_1,p_1p_2,\ldots,p_{n-2}p_{n-1},p_{n-1}p_0$ 组成的多边形。

若两条线段的内部（去掉端点后的部分）有公共部分，则称它们相交；若多边形的组成线段之间有交叉，则称该多边形自交。本题假定多边形的任意三个顶点均不共线，且不会出现计算误差或溢出。程序及空栏 ①、② 如上，其中注释的含义如下。

- `pred(a,b,c)` 假定三点不共线。经过 a、b 的直线将平面分为两个区域，根据 c 所在的区域返回 1 或 −1。
- `test_seg_seg(a,b,c,d)` 假定四点中的任意三点均不共线；当线段 ab 与 cd 相交时返回 `true`，否则返回 `false`。
- `swap_edges(P,i,j)` 假定线段 `P[i]P[i+1]` 与 `P[j]P[(j+1)%n]` 相交，其中 n 为顶点数，且 `i < j`。将 P 中下标从 i+1 到 j 的元素逆序，从而重新连接两条边并消除其交叉。
- `has_intersection` 假定多边形任意三个顶点均不共线；若存在相交线段对则返回 `true`，否则返回 `false`。存在相交线段对时，还要更新 `idx1`、`idx2`，并保证 `idx1 < idx2`。
- `untangle` 消除满足上述不共线条件的自交多边形的交叉。

回答第 1～5 问。

1. 设四点 $a_1,b_1,c_1,d_1$ 的坐标分别为 $(0,0),(3,3),(3,0),(1,2)$，求 `pred(a₁,b₁,c₁)`、`pred(a₁,b₁,d₁)`、`pred(c₁,d₁,a₁)`、`pred(c₁,d₁,b₁)` 的返回值。只需写出结果。
2. 编写空栏 ①，使 `test_seg_seg` 按其前面的注释运行，只需对满足假设的参数正确工作。函数体可包含多行，允许使用 `sgn`、`ted`、`pred`。
3. `swap_edges` 只需将 P 中下标从 i+1 到 j 的元素逆序。编写空栏 ②，函数体可包含多行。
4. `has_intersection` 会反复调用 `test_seg_seg`，但部分调用使用了不适当的参数。根据 `test_seg_seg` 的具体实现，这可能导致 `untangle` 中出现无限循环。说明哪些参数不适当，以及如何修改 `has_intersection` 来避免该问题。
5. 证明执行 `swap_edges` 后，多边形周长（全部线段长度之和）严格减少。可先将 `P[i]`、`P[i+1]`、`P[j]`、`P[(j+1)%n]` 分别记为 $a,b,c,d$，再将线段 $ab$ 与 $cd$ 的交点记为 $g$，利用三角不等式证明。

## **Kai**

### 1.

$$
\boxed{1,\ -1,\ -1,\ 1}
$$

### 2. 線分の交差判定

①には次のように記せばよい。

```cpp
return pred(a, b, c) * pred(a, b, d) < 0
    && pred(c, d, a) * pred(c, d, b) < 0;
```

どの 3 点も同一直線上にないので，各 `pred` の値は $\pm1$ である。二つの線分の内部が交わるための必要十分条件は，c，d が直線 ab の反対側にあり，かつ a，b が直線 cd の反対側にあることである。それぞれの条件を符号の積が負であることで表している。

### 3. 部分列の反転

②には次のように記す。

```cpp
for (int left = i + 1, right = j; left < right; ++left, --right) {
    Point tmp = P[left];
    P[left] = P[right];
    P[right] = tmp;
}
```

反転区間の両端を交換しながら内側へ進む。時間計算量は $O(j-i)$，追加領域は $O(1)$ である。

### 4. 端点を共有する辺の除外

隣り合う二辺を渡す呼び出しが不適切である。具体的には

$$
j=i+1,\qquad\text{または}\qquad i=0,\ j=n-1
$$

の場合，四つの引数のうち二つが同じ頂点となる。このとき三点の非共線性という `test_seg_seg` の仮定を満たさない。端点の共有は本問でいう交差ではないので，これらの辺対は判定対象から除く。

```cpp
bool has_intersection(std::vector<Point>& P, int& idx1, int& idx2) {
    int n = P.size();
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            if (j == i + 1 || (i == 0 && j == n - 1)) continue;
            if (test_seg_seg(P[i], P[i+1], P[j], P[(j+1)%n])) {
                idx1 = i;
                idx2 = j;
                return true;
            }
        }
    }
    return false;
}
```

例えば，第 2 問の符号の積による各判定を，仮定の下で等価な `pred(a,b,c) != pred(a,b,d)` などの不一致判定に置き換えると，端点が重なった場合に現れる 0 を正しく扱えず，隣接辺を交差と判定し得る。$j=i+1$ なら反転する要素は一つだけで多角形が変わらず，無限ループの原因となる。第 2 問の積を使う実装では共有端点を交差としないが，呼び出し側でも関数の仮定を守る必要がある。

なお，$i=n-1$ のとき内側のループは一度も実行されないため，原プログラムで `P[i+1]` が配列外を参照するわけではない。

### 5. 周長が真に減少すること

反転前の二辺を $ab,cd$ とすると，反転後は $ac,bd$ に置き換わる。反転区間の内部の辺は向きが逆になるだけであり，長さは変わらない。

交点 $g$ は $ab,cd$ の双方の内部にある。三頂点が同一直線上にないため，$a,g,c$ および $b,g,d$ も非共線であり，三角不等式は狭義となる。

$$
|ac|<|ag|+|gc|,\qquad
|bd|<|bg|+|gd|.
$$

両式を加え，$|ag|+|gb|=|ab|$，$|cg|+|gd|=|cd|$ を用いると，

$$
\boxed{|ac|+|bd|<|ab|+|cd|}.
$$

その他の辺の長さの和は不変なので，多角形全体の周長も真に減少する。また，頂点の並び方は有限個しかなく，同じ並びに戻ることはないので，適切な辺対だけを交換する反復は有限回で終了する。

## **Reference**

- [中央大学 2025年度 夏季一般入学試験・情報工学 公式問題（冊内 p.77／PDF 第78頁）](https://www.chuo-u.ac.jp/uploads/2025/09/admission_gschool_exam_science_10_01.pdf#page=78)
