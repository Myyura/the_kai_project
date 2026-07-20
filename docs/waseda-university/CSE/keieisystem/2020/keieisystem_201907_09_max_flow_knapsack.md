---
sidebar_label: 2019年7月実施 オペレーションズリサーチ 問題9
tags:
  - Waseda-University
  - Operations-Research.Linear-Programming.Simplex-Method
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Decision-Analysis.Sensitivity-Analysis
  - Operations-Research.Combinatorial-Optimization.Maximum-Flow
  - Operations-Research.Combinatorial-Optimization.Branch-and-Bound
  - Computer-Science.Dynamic-Programming.Knapsack-Problem
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 オペレーションズリサーチ 問題9

## **Author**
祭音Myyura

## **Description**

1. 次の線形計画問題について、単体法、双対問題、最適目的値の一致、第1制約右辺の感度を求めよ。

   $$
   \begin{array}{ll}
   \text{maximize}&z=5x_1+3x_2\\
   \text{subject to}&x_1+x_2\leq60,\\
   &2x_1+x_2\leq80,\\
   &x_1,x_2\geq0.
   \end{array}
   $$

2. 容量 $c_{01}=1,c_{02}=1,c_{12}=2$ のネットワークで、頂点0から2への最大流問題とその双対を示し、双対変数の意味を説明せよ。

   ```mermaid
   graph LR
       v0(("0")) -->|1| v1(("1"))
       v0 -->|1| v2(("2"))
       v1 -->|2| v2
   ```

3. 次の0--1ナップサック問題について、線形緩和解を求め、分枝限定法で解け。

   $$
   \begin{array}{ll}
   \text{maximize}&8x_1+8x_2+3x_3\\
   \text{subject to}&4x_1+5x_2+2x_3\leq6,\\
   &x_1,x_2,x_3\in\{0,1\}.
   \end{array}
   $$

## **Kai**

### [小問 1-1]

スラック変数 $s_1,s_2$ を加える。最下段は $c_j-z_j$ である。

#### 初期表

| 基底 | 右辺 | $x_1$ | $x_2$ | $s_1$ | $s_2$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| $s_1$ | 60 | 1 | 1 | 1 | 0 |
| $s_2$ | 80 | 2 | 1 | 0 | 1 |
| $c_j-z_j$ |  | 5 | 3 | 0 | 0 |

$x_1$ 列を選ぶ。比 $60,40$ の小さい $s_2$ 行を pivot 行とする。

#### 第1 pivot 後

| 基底 | 右辺 | $x_1$ | $x_2$ | $s_1$ | $s_2$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| $s_1$ | 20 | 0 | $1/2$ | 1 | $-1/2$ |
| $x_1$ | 40 | 1 | $1/2$ | 0 | $1/2$ |
| $c_j-z_j$ |  | 0 | $1/2$ | 0 | $-5/2$ |

次に $x_2$ 列を選ぶ。比 $20/(1/2)=40$ と $40/(1/2)=80$ より $s_1$ 行が pivot 行である。

#### 第2 pivot 後

| 基底 | 右辺 | $x_1$ | $x_2$ | $s_1$ | $s_2$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| $x_2$ | 40 | 0 | 1 | 2 | -1 |
| $x_1$ | 20 | 1 | 0 | -1 | 1 |
| $c_j-z_j$ |  | 0 | 0 | -1 | -2 |

したがって

$$
\boxed{(x_1,x_2)=(20,40)},\qquad
\boxed{z^*=220}.
$$

### [小問 1-2]

双対問題は

$$
\begin{array}{ll}
\text{minimize}&60y_1+80y_2\\
\text{subject to}&y_1+2y_2\geq5,\\
&y_1+y_2\geq3,\\
&y_1,y_2\geq0.
\end{array}
$$

### [小問 1-3]

双対解 $(y_1,y_2)=(1,2)$ は実行可能で、目的値は

$$
60(1)+80(2)=220=z^*.
$$

主・双対実行可能解の目的値が一致するため、両者は最適である。

### [小問 1-4]

第1制約の右辺を $60+\delta$ とする。影価格は $y_1=1$ なので

$$
\boxed{z^*(\delta)=220+\delta}.
$$

実際、同じ基底では

$$
x_2=40+2\delta,\qquad x_1=20-\delta
$$

となるため、この関係は $0\leq\delta\leq20$ で有効である。正の微小増加に対する目的値の増加率は1である。

### [小問 2-1]

枝流量を $x_{01},x_{02},x_{12}$、総流量を $v$ とすると

$$
\begin{array}{ll}
\text{maximize}&v\\
\text{subject to}
&x_{01}+x_{02}=v,\\
&x_{01}-x_{12}=0,\\
&x_{02}+x_{12}=v,\\
&0\leq x_{01}\leq1,\\
&0\leq x_{02}\leq1,\\
&0\leq x_{12}\leq2.
\end{array}
$$

最適流は例えば

$$
\boxed{x_{01}=1,quad x_{02}=1,quad x_{12}=1,quad v^*=2}
$$

である。

### [小問 2-2]

最大流問題の双対は最小カット問題として表せる。頂点ポテンシャルを $p_i$、枝がカットを横切る度合いを $y_{ij}$ とすれば

$$
\begin{array}{ll}
\text{minimize}&y_{01}+y_{02}+2y_{12}\\
\text{subject to}
&p_0=1,\quad p_2=0,\quad0\leq p_1\leq1,\\
&y_{01}\geq p_0-p_1,\\
&y_{02}\geq p_0-p_2,\\
&y_{12}\geq p_1-p_2,\\
&y_{01},y_{02},y_{12}\geq0.
\end{array}
$$

$p_i$ は頂点 $i$ が始点側に属することを表し、$y_{ij}$ は始点側から終点側へ横切る枝の指示量に対応する。$p=(1,0,0)$ とするとカット $S=\{0\}$ が得られ、$y_{01}=y_{02}=1,y_{12}=0$、容量は2である。最大流値と最小カット容量がともに2なので最適である。

### [小問 3-1]

線形緩和では $0\leq x_i\leq1$ とする。価値重量比は

$$
\frac84=2,\qquad\frac85=1.6,\qquad\frac32=1.5
$$

なので、順に詰めると

$$
\boxed{(x_1,x_2,x_3)=\left(1,\frac25,0\right)},\qquad
\boxed{z_{\mathrm{LP}}=\frac{56}{5}=11.2}.
$$

これは整数問題の上界である。

### [小問 3-2]

緩和解で分数となった $x_2$ について分枝する。

- $x_2=0$：緩和問題は $(x_1,x_3)=(1,1)$ を与える。これは整数実行可能で、目的値は $8+3=11$ であるため暫定解とする。
- $x_2=1$：残り容量は1であり、緩和上界は $x_1=1/4,x_3=0$ のとき $8+2=10$ である。暫定値11を超えないので枝刈りする。

したがって最適解は

$$
\boxed{(x_1,x_2,x_3)=(1,0,1)},\qquad
\boxed{z^*=11}.
$$

子問題は上界の大きいものから選ぶ best-bound 法を用いており、分枝変数には現在の緩和解で分数となる変数を選んでいる。
