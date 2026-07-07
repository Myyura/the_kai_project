---
sidebar_label: "2018年7月実施 オペレーションズリサーチ 問題9"
tags:
  - Waseda-University
  - Operations-Research.Optimization.Simplex-Method
  - Operations-Research.Optimization.Linear-Programming-Duality
  - Operations-Research.Decision-Analysis.Sensitivity-Analysis
  - Operations-Research.Optimization.Traveling-Salesman-Problem
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 オペレーションズリサーチ 問題9

## **Author**
祭音Myyura

## **Description**

1. 次の線形計画問題 $(P)$ について答えよ。

   $$
   \begin{array}{ll}
   \text{maximize}&z=5x_1+3x_2+2x_3\\
   \text{subject to}
   &x_1+x_2+2x_3\leq4,\\
   &2x_1+x_2+x_3\leq5,\\
   &2x_1+2x_2+x_3\leq9,\\
   &x_1,x_2,x_3\geq0.
   \end{array}
   $$

   1. pivot の列・行を示して単体法で解け。
   2. 双対問題を示せ。
   3. 主・双対問題の最適目的関数値が一致することを示せ。
   4. 第1制約の右辺を正の微小量だけ増加させたときの最適目的関数値の変化を求めよ。
   5. 最適基底行列の逆行列を積形式で示せ。
2. 有向グラフ上の巡回セールスマン問題を、部分巡回路除去制約を含めて定式化せよ。

## **Kai**

### [小問 1-1]

スラック変数 $s_1,s_2,s_3$ を加える。表の最下段は $c_j-z_j$ である。

#### 初期表

| 基底 | 右辺 | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $s_1$ | 4 | 1 | 1 | 2 | 1 | 0 | 0 |
| $s_2$ | 5 | 2 | 1 | 1 | 0 | 1 | 0 |
| $s_3$ | 9 | 2 | 2 | 1 | 0 | 0 | 1 |
| $c_j-z_j$ |  | 5 | 3 | 2 | 0 | 0 | 0 |

$x_1$ 列を pivot 列とする。比は $4,5/2,9/2$ なので $s_2$ 行が pivot 行である。

#### 第1 pivot 後

| 基底 | 右辺 | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $s_1$ | $3/2$ | 0 | $1/2$ | $3/2$ | 1 | $-1/2$ | 0 |
| $x_1$ | $5/2$ | 1 | $1/2$ | $1/2$ | 0 | $1/2$ | 0 |
| $s_3$ | 4 | 0 | 1 | 0 | 0 | -1 | 1 |
| $c_j-z_j$ |  | 0 | $1/2$ | $-1/2$ | 0 | $-5/2$ | 0 |

次に $x_2$ 列を pivot 列とする。比は $3,5,4$ なので $s_1$ 行が pivot 行である。

#### 第2 pivot 後

| 基底 | 右辺 | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $x_2$ | 3 | 0 | 1 | 3 | 2 | -1 | 0 |
| $x_1$ | 1 | 1 | 0 | -1 | -1 | 1 | 0 |
| $s_3$ | 1 | 0 | 0 | -3 | -2 | 0 | 1 |
| $c_j-z_j$ |  | 0 | 0 | -2 | -1 | -2 | 0 |

すべての $c_j-z_j\leq0$ なので最適である。したがって

$$
\boxed{(x_1,x_2,x_3)=(1,3,0)},\qquad
\boxed{z^*=14}.
$$

### [小問 1-2]

双対問題 $(D)$ は

$$
\begin{array}{ll}
\text{minimize}&4y_1+5y_2+9y_3\\
\text{subject to}
&y_1+2y_2+2y_3\geq5,\\
&y_1+y_2+2y_3\geq3,\\
&2y_1+y_2+y_3\geq2,\\
&y_1,y_2,y_3\geq0.
\end{array}
$$

### [小問 1-3]

$$
\boxed{(y_1,y_2,y_3)=(1,2,0)}
$$

は双対実行可能であり、目的値は

$$
4(1)+5(2)+9(0)=14=z^*.
$$

主・双対の実行可能解の目的値が一致したので、弱双対性から両者は最適である。

### [小問 1-4]

第1制約の右辺を $4+\delta$ とする。最適双対変数 $y_1=1$ は第1資源の影価格なので、同じ基底が実行可能な範囲では

$$
\boxed{z^*(\delta)=14+\delta}.
$$

実際、最適基底を $(x_2,x_1,s_3)$ の順に取ると

$$
(x_2,x_1,s_3)=(3+2\delta,1-\delta,1-2\delta).
$$

したがって $0\leq\delta\leq1/2$ ではこの式が成立し、正の微小増加に対する目的値の増加率は1である。

### [小問 1-5]

最適基底行列を列 $(x_2,x_1,s_3)$ の順に

$$
B=\begin{pmatrix}1&1&0\\1&2&0\\2&2&1\end{pmatrix}
$$

とする。2回の pivot に対応する行基本変形行列は

$$
E_1=\begin{pmatrix}1&-1/2&0\\0&1/2&0\\0&-1&1\end{pmatrix},\qquad
E_2=\begin{pmatrix}2&0&0\\-1&1&0\\-2&0&1\end{pmatrix}.
$$

よって積形式の逆行列は

$$
\boxed{
B^{-1}=E_2E_1
=\begin{pmatrix}2&-1&0\\-1&1&0\\-2&0&1\end{pmatrix}
}.
$$

### [小問 2]

枝 $(i,j)$ が巡回路に含まれるとき $x_{ij}=1$、それ以外を0とする。定式化は

$$
\begin{array}{ll}
\text{minimize}
&\displaystyle\sum_{i\in N}\sum_{\substack{j\in N\\j\neq i}}c_{ij}x_{ij}\\
\text{subject to}
&\displaystyle\sum_{\substack{j\in N\\j\neq i}}x_{ij}=1
\quad(i\in N),\\
&\displaystyle\sum_{\substack{i\in N\\i\neq j}}x_{ij}=1
\quad(j\in N),\\
&\displaystyle\sum_{i\in S}\sum_{\substack{j\in S\\j\neq i}}x_{ij}
\leq |S|-1
\quad(\varnothing\neq S\subsetneq N),\\
&x_{ij}\in\{0,1\}.
\end{array}
$$

最初の2組の制約だけでは、全頂点が複数の互いに素な閉路へ分かれる可能性がある。第3組は任意の真部分集合 $S$ の内部だけで閉路を完成させることを禁じる部分巡回路除去制約であり、全頂点を1回ずつ通る単一のハミルトン閉路を保証する。
