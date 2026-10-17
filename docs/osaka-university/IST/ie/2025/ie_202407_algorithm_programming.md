---
sidebar_label: 2024年7月実施 アルゴリズムとプログラミング
tags:
  - Osaka-University
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Programming.Pointers-and-Arrays
---
# 大阪大学 情報科学研究科 情報工学 2024年7月実施 アルゴリズムとプログラミング

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

配点：(1) 45、(2-1) 20、(2-2) 30、(2-3) 30

二分ヒープ（binary heap）と呼ばれる、以下の二つの特性を持つ二分木（binary tree）を考える。

- 特性1：各節点（node）に格納された値は、その親（parent）に格納された値以上であること。
- 特性2：木の高さ（height）を $h$ とすると、深さ（depth）が $h$ の節点は、左詰めに並んでいること。また、$h\ge2$ の場合には、深さが $h-2$ 以下の節点はすべて2個の子（child）を持つこと。ただし、ある節点の深さとは、根（root）からその節点までの経路（path）上の辺（edge）の数を指し、木の高さは深さの最大値を指す。

以降、節点番号（node number）$i$ を持つ節点を節点 $i$ と呼ぶ。また、根の節点番号を1とし、節点 $i$ の左の子の節点番号を $2i$、右の子の節点番号を $2i+1$ とする。図1に節点数が6の二分ヒープの例を示す。節点の左上にある数は節点番号を表し、節点内部の数は節点に格納されている値を表す。

![図1：二分ヒープの例](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/IST/ie/2025/ie_202407_algorithm_programming_fig1.png)

以下の各問に答えよ。

### (1)

以下の空欄 (A)～(J) に当てはまる最も適切な語句を、以下の選択肢 (a)～(l) から選び、記号で答えよ。なお、同じ選択肢を複数回用いてもよい。また、空欄 $(\alpha),(\beta),(\gamma)$ を適切な数式で埋めよ。

木の高さが $h$ であるような二分ヒープが持つ節点の数は、最も少ない場合 $\boxed{\alpha}$ であり、最も多い場合 $\boxed{\beta}$ である。

節点数が1以上の二分ヒープへの新しい値の追加は、次の手順で行うことができる。なお、以下の手順の Step 1 により $\boxed{\text{(A)}}$ を満たすことができ、Step 2～Step 3 により $\boxed{\text{(B)}}$ を満たすことができる。

**Step 1** 子を一つしか持たない節点があれば、その節点の $\boxed{\text{(C)}}$ の子として、新しい節点を追加する。子を一つしか持たない節点がなければ、子を持たない節点のうち、節点番号が $\boxed{\text{(D)}}$ 節点の $\boxed{\text{(E)}}$ の子として、新しい節点を追加する。追加された節点に新しい値を格納する。

**Step 2** 新しい値と新しい値が格納されている節点の $\boxed{\text{(F)}}$ に格納されている値を比較する。もし、新しい値の方がより $\boxed{\text{(G)}}$ 場合は、新しい値が格納されている節点とその $\boxed{\text{(H)}}$ の値を入れ替えることにより、新しい値が格納されている節点を変更する。それ以外の場合は、処理を終了する。

**Step 3** 新しい値が格納されている節点が $\boxed{\text{(I)}}$ であれば、処理を終了する。それ以外の場合は、Step 2 に戻る。

上記の手順で、二分ヒープへの値の追加を行っていくと、根の値は、二分ヒープ内の値のうち $\boxed{\text{(J)}}$ ものとなる。また、上記の手順で、節点数が $n-1$ の二分ヒープへ値を追加し、節点数が $n$ の二分ヒープを構成する際の、値の入れ替えの回数を $S(n)$ とすると、$S(n)$ の最大値の $n$ に関するオーダ表記（order notation）は、$O(\boxed{\gamma})$ となる。

```text
(a) 右  (b) 左  (c) 大きい  (d) 小さい
(e) 最も大きい  (f) 最も小さい
(g) 根  (h) 親  (i) 子  (j) 葉
(k) 特性1  (l) 特性2
```

### (2)

図2に示す ANSI-C 準拠である C 言語のプログラム（program）により、図3に示される `input.txt` に記載された値を昇順（ascending order）で出力（output）したい。以下の各小問に答えよ。

(2-1) 関数（function）`build_heap` は、配列（array）`data` に二分ヒープの節点数と節点の値を格納する関数である。57行目の処理を終えたときの `data[0]`～`data[10]` の値を示せ。

(2-2) 空欄 (A)～(F) を `x`、`y` あるいは `z` で埋めて、関数 `down` を完成させよ。

(2-3) 下図の関数 `replace` は、関数 `build_heap` により二分ヒープの節点数と節点の値が格納された配列である引数（parameter）`data` に対し、引数 `index` で与えられた番号の節点が存在する場合、引数 `index` で指定された節点の値を引数 `e` の値に変更した上で、配列 `data` が二分ヒープの特性を満たすための処理を行う。以下の図中の関数 `replace` にある空欄 (G)～(K) に当てはまる適切な式（expression）を、以下の選択肢 (a)～(k) から選び、記号で答えよ。ただし、同じ選択肢を複数回用いてはならない。

```c
void replace(int *data, int index, int e) {
    if ((index > (G)) || (index <= (H))) return;
    data[index] = e;
    if ((index != 1) && (data[index] < data[(I)])) {
        (J);
    } else {
        (K);
    }
}
```

```text
(a) 0                    (b) data[0]            (c) data[index]
(d) index / 2            (e) 2 * index          (f) 2 * index + 1
(g) up(data, index)      (h) down(data, index)   (i) add(data, e)
(j) del(data)            (k) replace(data, index, e)
```

図2：プログラム

```c showLineNumbers
#include <stdio.h>
#define SIZE 10

void swap(int *data, int i, int j) {
    int tmp = data[i]; data[i] = data[j]; data[j] = tmp;
}

void up(int *data, int i) {
    int j;
    while (i > 1) {
        j = i / 2;
        if (data[j] <= data[i]) break;
        swap(data, i, j); i = j;
    }
}

void down(int *data, int x) {
    int y, z;
    while (2 * x <= data[0]) {
        y = 2 * x; z = 2 * x + 1;
        if ((z > data[0])||(data[(A)] < data[(B)])) {
            if (data[(C)] <= data[(D)]) break;
            swap(data, x, y); x = y;
        } else {
            if (data[(E)] <= data[(F)]) break;
            swap(data, x, z); x = z;
        }
    }
}

void add(int *data, int e) {
    if ((data[0] + 1) > SIZE) return;
    data[0]++; data[data[0]] = e;
    up(data, data[0]);
}

void del(int *data) {
    if (data[0] <= 0) return;
    swap(data, 1, data[0]); data[0]--;
    down(data, 1);
}

void build_heap(int *data) {
    FILE *fp;
    int i, d;
    fp = fopen("input.txt", "r");
    data[0] = 0;
    for (i = 0; i < SIZE; i++) {
        fscanf(fp, "%d", &d);
        add(data, d);
    }
    fclose(fp);
}

int main(void) {
    int data[SIZE + 1];
    build_heap(data);
    while (data[0] > 0) { printf("%d\n", data[1]); del(data); }
    return 0;
}
```

図3：`input.txt`

```text
9
17
65
60
64
39
36
8
16
39
```

#### 题目描述

分值：(1) 45、(2-1) 20、(2-2) 30、(2-3) 30。

考虑称为二叉堆的二叉树，具有以下两个性质。

- 性质1：每个节点存储的值不小于其父节点存储的值。
- 性质2：若树高为 $h$，则深度为 $h$ 的节点靠左排列；当 $h\ge2$ 时，深度不超过 $h-2$ 的所有节点均有两个子节点。节点深度指从根到该节点的路径上边的数量，树高指最大深度。

下文把编号为 $i$ 的节点称为节点 $i$。根编号为1，节点 $i$ 的左、右子节点分别编号为 $2i$、$2i+1$。图1给出一个具有6个节点的二叉堆，节点左上方的数是编号，节点内部的数是其存储的值。回答下列问题。

### (1)

从 (a)～(l) 中选择最合适的词语填写 (A)～(J)，用选项符号作答，选项可以重复使用。另用适当的表达式填写 $(\alpha),(\beta),(\gamma)$。

高度为 $h$ 的二叉堆，节点数最少为 $\boxed{\alpha}$，最多为 $\boxed{\beta}$。

对于节点数不少于1的二叉堆，可以按下列步骤加入新值。Step 1 能使其满足 $\boxed{\text{(A)}}$，Step 2～Step 3 能使其满足 $\boxed{\text{(B)}}$。

**Step 1** 若有节点只有一个子节点，就将新节点作为该节点的 $\boxed{\text{(C)}}$ 子节点。若不存在这样的节点，则在所有无子节点的节点中，选择编号 $\boxed{\text{(D)}}$ 的节点，将新节点作为其 $\boxed{\text{(E)}}$ 子节点。把新值存入新节点。

**Step 2** 比较新值与存储新值的节点的 $\boxed{\text{(F)}}$ 中的值。若新值更 $\boxed{\text{(G)}}$，则交换存储新值的节点与其 $\boxed{\text{(H)}}$ 的值，从而改变新值所在节点。否则结束处理。

**Step 3** 若新值所在节点为 $\boxed{\text{(I)}}$，则结束处理；否则返回 Step 2。

按上述步骤不断向二叉堆加入值，根的值始终是堆中 $\boxed{\text{(J)}}$ 的值。向具有 $n-1$ 个节点的堆加入一个值、构成 $n$ 个节点的堆时，若交换次数为 $S(n)$，则 $S(n)$ 最大值关于 $n$ 的复杂度为 $O(\boxed{\gamma})$。

```text
(a) 右  (b) 左  (c) 大  (d) 小
(e) 最大  (f) 最小
(g) 根  (h) 父节点  (i) 子节点  (j) 叶节点
(k) 性质1  (l) 性质2
```

### (2)

用图2中符合 ANSI-C 的 C 程序，将图3的 `input.txt` 中记录的数值按升序输出。回答各小问。

(2-1) `build_heap` 将二叉堆的节点数和各节点的值存入数组 `data`。写出第57行执行结束时 `data[0]`～`data[10]` 的值。

(2-2) 用 `x`、`y` 或 `z` 填写 (A)～(F)，完成 `down` 函数。

(2-3) `replace` 的参数 `data` 是经 `build_heap` 存入节点数和节点值的数组。若参数 `index` 指定的节点存在，就把该节点的值改为参数 `e`，并进行使 `data` 满足二叉堆性质的处理。对于上方给出的 `replace` 完整代码，从下列选项 (a)～(k) 中选择适当表达式填写 (G)～(K)，用符号作答，各选项不可重复使用。

```text
(a) 0                    (b) data[0]            (c) data[index]
(d) index / 2            (e) 2 * index          (f) 2 * index + 1
(g) up(data, index)      (h) down(data, index)   (i) add(data, e)
(j) del(data)            (k) replace(data, index, e)
```

## **Kai**

### (1)

高度为 $h$ 时，深度 $0,\ldots,h-1$ 的各层均已填满，而深度 $h$ 至少有一个节点。因此

$$
\boxed{(\alpha)=2^h},\qquad
\boxed{(\beta)=2^{h+1}-1}.
$$

各空欄は

$$
\boxed{\begin{gathered}
(A)=(l),\quad(B)=(k),\quad(C)=(a),\\
(D)=(f),\quad(E)=(b)
\end{gathered}}
$$

$$
\boxed{\begin{gathered}
(F)=(h),\quad(G)=(d),\quad(H)=(h),\\
(I)=(g),\quad(J)=(f)
\end{gathered}}.
$$

すなわち、形状を保つ位置へ追加し、親より小さい間だけ上へ交換するため、根には常に最小値が格納される。

交換回数 $S(n)$ は新節点の深さ以下であり、最深位置へ最小値を追加すればその上限に達する。したがって、その最大値は

$$
\boxed{S_{\max}(n)=\lfloor\log_2 n\rfloor},\qquad
\boxed{(\gamma)=\log n}.
$$

### (2)

#### (2-1)

`build_heap` は入力順に `add` を呼ぶ。したがって

$$
\boxed{
\texttt{data[0..10]}
=(10,8,9,36,16,39,65,39,60,17,64)
}.
$$

#### (2-2)

左右の子のうち小さい方と比較すればよいから

$$
\boxed{\begin{gathered}
(A)=y,\quad(B)=z,\quad(C)=x,\\
(D)=y,\quad(E)=x,\quad(F)=z
\end{gathered}}.
$$

完成形は次の通りである。

```c
void down(int *data, int x) {
    int y, z;
    while (2 * x <= data[0]) {
        y = 2 * x;
        z = 2 * x + 1;
        if ((z > data[0]) || (data[y] < data[z])) {
            if (data[x] <= data[y]) break;
            swap(data, x, y); x = y;
        } else {
            if (data[x] <= data[z]) break;
            swap(data, x, z); x = z;
        }
    }
}
```

#### (2-3)

範囲外を除外し、親より小さくなった場合だけ上へ、それ以外は下へ修復する。

$$
\boxed{\begin{gathered}
(G)=(b),\quad(H)=(a),\quad(I)=(d),\\
(J)=(g),\quad(K)=(h)
\end{gathered}}.
$$

```c
void replace(int *data, int index, int e) {
    if ((index > data[0]) || (index <= 0)) return;
    data[index] = e;
    if ((index != 1) && (data[index] < data[index / 2])) {
        up(data, index);
    } else {
        down(data, index);
    }
}
```

## **Reference**

- [大学公式問題](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/5_Information%20engineering_2025_JA.pdf)
