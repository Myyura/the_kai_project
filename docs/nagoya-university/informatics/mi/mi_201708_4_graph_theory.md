---
sidebar_label: "2017年8月実施 問題4 グラフ理論"
sidebar_position: 7
tags:
  - Nagoya-University
  - Graph-Theory
  - Planar-Graph
---
# 名古屋大学 情報学研究科 数理情報学専攻 2017年8月実施 問題4 グラフ理論

## **Author**
祭音Myyura

## **Description**
頂点 (vertex) 集合 $V$、辺 (edge) 集合 $E$ をもつ無向グラフ (undirected graph) $G = (V, E)$ を考える。

- $G$ を平面上に辺が交差することなく描画できるとき (non-crossing drawing exists)、そのように描画したものを平面グラフ (plane graph) と呼び、辺によって分割された領域のそれぞれを面 (face) と呼ぶ。平面グラフの外側の領域も面の一つである (外面 (outer face))。例えば図１は平面グラフであり $f_1$ から $f_5$ までの面がある。
- 頂点の列 $(v_1, v_2, \ldots, v_k, v_{k+1})$ が $\{v_i, v_{i+1}\} \in E \ (i = 1, 2, \ldots, k), v_{k+1} = v_1$ であるとき、このような列のことを閉路 (cycle) という。図１の $(v_1, v_2, v_3, v_1)$ は閉路である。
- 木 (tree) とは閉路のない連結 (connected) グラフのことをいう。例えば、図２は木である。木は平面グラフでもある。
- $n$ 頂点完全 (complete) グラフ $K_n$ とは、$|V| = n, E = \{\{u, v\} \mid u, v \in V \}$ を満たすようなグラフのことをいう。例えば図３のグラフは $K_5$ である。

以上を踏まえた上で、以下の各問に答えよ。

(1) 図１, 図２のグラフのそれぞれの頂点数、辺数、面数を答えよ。

(2) 平面グラフにおいて、一つの面は一つの閉路と (一対一) 対応するか。する場合、証明を与えよ。しない場合、そのような例を一つ挙げよ。

(3) 連結な平面グラフにおいてはオイラーの公式 (Euler's formula) $|V| - |E| + f = 2$ が成立する。ただし、$f$ は面数である。これを利用し、平面グラフにおいては、$|E| \le 3|V| - 6$ が成立することを示せ。(ヒント：どの面も3本以上の辺に囲まれている)

(4) $K_n (n = 3, 4, 5, \ldots)$ は平面グラフであるかどうかを、根拠と共に述べよ。

(5) (3) で取り上げたオイラーの公式 $|V| - |E| + f = 2$ を証明せよ。必要ならば、木においては $|E| = |V| - 1$ が成立することを用いて良い。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/mi_201708_4_graph_theory_p1.png" width="344" height="215" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/mi_201708_4_graph_theory_p2.png" width="190" height="215" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/mi_201708_4_graph_theory_p3.png" width="128" height="176" alt=""/>
</figure>

## **Kai**
### (1)
- 図１: 頂点数 $8$, 辺数 $11$, 面数 $5$
- 図２: 頂点数 $7$, 辺数 $6$, 面数 $1$

### (2)
平面グラフにおいて、一つの面は一つの閉路と(一対一)対応しない。例えば、以下のような平面グラフ（四角形）を考える：

```text
  v1----v2
   |    |
   |    |
  v4----v3
```

閉路は１つ（$(v_1, v_2, v_3, v_4, v_1)$）ですが、面の２つ（内側の面と外側の面）あるので、一対一の対応は成立しない。

### (3)
（ヒント：どの面も３本以上の辺に囲まれている）

外部領域も含め全ての領域が３本以上の辺に囲まれている。
そして、各辺は２つの領域を分けているから、各領域を囲む辺を全て数え上げると各辺を２度数えることになるので

$$
\begin{align}
3f \leq 2|E| \tag{i}
\end{align}
$$

が成り立つ。(i) とオイラーの公式から

$$
3|V| - 3|E| + 2|E| \geq 6
$$

即ち、

$$
|E| \leq 3|V| - 6
$$

### (4)
$K_3$ と $K_4$ は平面グラフ。（証明は略）

$K_5$ は平面グラフではない。$K_5$ は $|E|=10$、$|V|=5$ なので、もし平面グラフの形に書けたとすると、(3) により

$$
|E| \leq 3|V| - 6 = 9
$$

でなければならない。それは $|E|=10$ に矛盾する。

$K_n \ (n=6, 8, \ldots)$ は $K_5$ を含むので、平面グラフではない。

### (5)
辺数 $|E|$ に関する数学的帰納法により証明する。

$|E|$ が一番少ないのは $G$ が木のときで $|E|=|V|-1$ であり、面は外側のひとつだけなので $f=1$。
よって $|V|-|E|+f = |V| - (|V|-1) + 1= 2$ となって成り立ちます。

$G$ が木でないときは、$G$ 内の閉路 $C$ と、$C$ 上の辺 $e$ を $1$ 本選んで

$$
G' = G - e
$$

を考えます。$G'$ は $G$ の部分グラフゆえ平面グラフで、そのパラメータを $|V'|$, $|E'|$, $f'$ とおくと

- 頂点は消していないので $|V'|=|V|$
- 辺は 1 本除去したので $|E'|=|E|-1$
- $e$ の表側の 2 つの面が 1 つにつながったので $f'=f-1$

よって

$$
|V|-|E|+f=|V'|-(|E'|+1)+(f'+1)=|V'|-|E'|+f'=2
$$

ここで $G'$ に帰納法の仮定を使いました。
