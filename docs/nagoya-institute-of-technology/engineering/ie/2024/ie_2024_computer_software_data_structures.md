---
sidebar_label: "2024年度 計算機ソフトウェア（データ構造とアルゴリズム）"
tags:
  - Nagoya-Institute-of-Technology
  - Operations-Research.Combinatorial-Optimization.Traveling-Salesman-Problem
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
  - Discrete-Mathematics.Graph-Algorithms.Kruskal-Algorithm
  - Discrete-Mathematics.Graph-Algorithms.Depth-First-Search
  - Computer-Science.Data-Structures.Union-Find-Data-Structure
  - Computer-Science.Algorithm-Design.Comparison-Sorting-Decision-Tree-Lower-Bound
---

# 名古屋工業大学 工学研究科 工学専攻 情報工学系 2024年度 計算機ソフトウェア（データ構造とアルゴリズム）

## **Author**
GPT-5.6 Sol, 祭音Myyura

## **Description**

ある組合せ最適化問題に関する次の問いに答えよ。時間計算量は漸近的に評価する。

各辺に非負の実数値の重みが定義された完全無向グラフが与えられたとき、すべての頂点を巡回して出発点へ戻る最短の単純閉路を求めたい。この問題は **(A) 問題** と呼ばれる。頂点数を $n$ とすると、時計回りと反時計回りを区別した巡回路の組合せ総数は **(B)** である。各巡回路を試す時間が $n$ に比例するとき、全巡回路の試行に要する時間は $O(\text{(C)})$ となる。

以下では、各辺の重みが頂点間のユークリッド距離であり、三角不等式を満たす (A) 問題を Euc-P と書く。Euc-P に対し、次の近似アルゴリズム Approx-P-Tour を考える。

```text
STEP 1: 完全無向グラフの最小全域木 T を構成する。
STEP 2: 任意の頂点を始点として T 上で深さ優先探索を行い、
        初回訪問順に全頂点を一度ずつ巡回して始点へ戻る単純閉路を得る。
```

STEP 1 では Kruskal のアルゴリズムを用いる。グラフを $G=(V,E,c)$、

$$
V=\{v_1,v_2,\ldots,v_n\},\qquad E=\{e_1,e_2,\ldots,e_m\}
$$

とする。$c$ は辺の重み関数である。

```text
Min-Span-Tree(G=(V,E,c)) {
    T <- empty set
    for (each v in V) make-set(v)
    sort(E,c)                    // c の昇順に e1,...,em とする
    for (i = 1 to m) {
        (x,y) <- ei              // ei の二端点
        if (find(x) != find(y)) {
            T <- T union {(x,y)}
            union(x,y)
        }
    }
}

make-set(v) {
    p <- v の添字番号
    parent[p] <- p
    size[p] <- 1
}

find(v) {
    p <- v の添字番号
    while (parent[p] != p) p <- parent[p]
    return p
}

union(u,v) {
    p <- find(u); q <- find(v)
    if (size[p] >= size[q]) {
        parent[q] <- p
        size[p] <- size[p] + size[q]
    } else {
        parent[p] <- q
        size[q] <- size[q] + size[p]
    }
}
```

### (1)

空欄 (A)--(C) に適切な語句または式を入れよ。

### (2)

`sort(E,c)` に比較に基づくソートを用いる場合、その最悪比較回数の下界を、辺数 $m$ と $\Omega$ 記号を用いて示せ。

### (3)

最小全域木 $T$ の辺重みの総和を $W$ とする。Euc-P の最適巡回路の重みの下界と、Approx-P-Tour が返す巡回路の重みの上界を、それぞれ $W$ を用いて具体的に示せ。

### (4)

頂点 $v_1,v_2,v_3,v_4$ からなる完全無向グラフの辺重みが次のように与えられている。

| 辺 | $v_1v_2$ | $v_1v_3$ | $v_1v_4$ | $v_2v_3$ | $v_2v_4$ | $v_3v_4$ |
|---|---:|---:|---:|---:|---:|---:|
| 重み | $8$ | $5$ | $3$ | $4$ | $7$ | $6$ |

最小全域木の重み $W$、Approx-P-Tour の巡回路とその重み、Euc-P の最適巡回路とその重みを求めよ。なお、次の規則を用いる。

- 辺 $e_i$ の二端点のうち添字番号が小さい方を $x$ とする。
- 深さ優先探索の始点は、最小全域木構成後に $\operatorname{find}(v)=v$ の添字番号となる頂点 $v$ とする。
- 未訪問の隣接頂点が複数あるとき、最小全域木へ辺が追加された順に探索する。

## **Kai**

### (1)

(A) は巡回セールスマン問題である。始点を一つ固定すると、残り $n-1$ 頂点の訪問順は $(n-1)!$ 通りであり、逆向きも別の巡回路として数えるので、

$$
\boxed{\text{(A)}=\text{巡回セールスマン}},\qquad
\boxed{\text{(B)}=(n-1)!}
$$

である。一つの巡回路の評価に $\Theta(n)$ 時間かかるため、

$$
n(n-1)!=n!
$$

より、

$$
\boxed{\text{(C)}=n!}
$$

となる。

### (2)

辺重みがすべて相異なる入力に限っても、その大小順序は $m!$ 通りある。比較決定木の高さを $h$ とすると、

$$
2^h\ge m!,\qquad h\ge \log_2(m!)=\Omega(m\log m).
$$

したがって、最悪比較回数の下界は

$$
\boxed{\Omega(m\log m)}
$$

である。

### (3)

最適巡回路から任意の一辺を除くと全頂点を含む全域木になる。その重みは最小全域木の重み $W$ 以上であるから、最適値を $\mathrm{OPT}$ とすると、

$$
\boxed{W\le \mathrm{OPT}}
$$

である。

一方、最小全域木の各辺を往復する閉路の重みは $2W$ である。深さ優先探索の初回訪問順へ短絡しても、三角不等式により重みは増えない。Approx-P-Tour の値を $L_{\mathrm{A}}$ とすると、

$$
\boxed{L_{\mathrm{A}}\le 2W}
$$

となる。

### (4)

辺を重みの昇順に並べると、

$$
(v_1,v_4):3, (v_2,v_3):4, (v_1,v_3):5,
(v_3,v_4):6, (v_2,v_4):7, (v_1,v_2):8
$$

である。Kruskal 法は最初の三辺を採用するので、

$$
T=\{(v_1,v_4),(v_2,v_3),(v_1,v_3)\},\qquad
\boxed{W=3+4+5=12}.
$$

同じ大きさの集合を併合するときは `union` の `>=` 側に入り、各辺の小さい添字側を $x$ とするため、最終代表元は $v_1$ である。$v_1$ から追加順に深さ優先探索すると、初回訪問順は

$$
v_1,v_4,v_3,v_2
$$

となる。したがって、近似巡回路と重みは

$$
v_1\to v_4\to v_3\to v_2\to v_1,\qquad
3+6+4+8=\boxed{21}.
$$

始点を $v_1$ に固定して残り三頂点の $3!=6$ 通りを調べると、最小は

$$
v_1\to v_3\to v_2\to v_4\to v_1
$$

とその逆向きであり、

$$
5+4+7+3=\boxed{19}.
$$

### 検算

プログラムで Union-Find の `parent` と `size` をそのまま実装したところ、採用辺は

```text
(v1,v4), (v2,v3), (v1,v3)
```

となり、全頂点の代表元は $v_1$、DFS 順は `[v1,v4,v3,v2]` となった。また、六つの巡回路の重みは方向を含めて

```text
19, 19, 21, 21, 26, 26
```

であり、近似値 $21$ と最適値 $19$ を確認した。

## **Reference**

- [名古屋工業大学 2024年度 情報工学系 入学試験問題](https://www.nitech.ac.jp/examination/test/files/2024_08_joho.pdf)
