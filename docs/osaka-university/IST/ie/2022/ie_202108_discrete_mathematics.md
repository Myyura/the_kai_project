---
sidebar_label: "2021年8月実施 離散構造"
tags:
  - Osaka-University
---
# 大阪大学 情報科学研究科 情報工学 2021年8月実施 離散構造

## **Author**
祭音Myyura

## **Description**
正の整数全体の集合 $\mathbb{N}$ における二項関係 (binary relation) $R$ を

$$
R = \{ (k,l) \mid k \text{ と } l \text{ は相異なり、かつ 1 より大きい公約数をもつ} \}
$$

により定める。任意の $n \in \mathbb{N}$ に対して、以下の式により定まる頂点集合 $V_n$ と辺集合 $E_n$ をもつ無向グラフを $G_n$ とする。

$$
\begin{aligned}
&V_n = \{ k \in \mathbb{N} \mid 1 \leq k \leq n \}, \\
&E_n = \{ \{ k, l \} \mid (k, l) \in R \text{ あるいは } (l, k) \in R \}
\end{aligned}
$$

$E_n$ の要素数を $m(n)$ と書く。以下の問いに答えよ。

(1) 二項関係 $R$ に関する以下の各小問に答えよ。

- (1-1) $R$ が対称的 (symmetric) であるかを判定せよ。その理由を述べよ。
- (1-2) $R$ が推移的 (transitive) であるかを判定せよ。その理由を述べよ。

(2) 無向グラフ $G_n$ に関する以下の各小問に答えよ。

- (2-1) $G_6$ が持つ辺の数 $m(6)$ と連結成分 (connected component) を数をそれぞれ答えよ。
- (2-2) 無向グラフ $G$ の部分グラフ (subgraph) $H$ が完全グラフ (complete graph) であるとき、$H$ を $G$ の完全部分グラフ (complete subgraph) と呼ぶ。$G_{10}$ の完全部分グラフの中で頂点数が最も大きいものの頂点集合を求めよ。
- (2-3) 不等式 $m(n) \geq \frac{1}{2} \left( \frac{n}{2} - 1 \right) \left(\frac{n}{2} - 2 \right)$ が $1$ より大きい任意の $n \in \mathbb{N}$ に対して成り立つことを証明せよ。

(3) 任意の $n \in \mathbb{N}$ に対して

$$
\mu(n) = \frac{1}{n} \sum_{k=1}^n m(k)
$$

とする。極限

$$
\gamma = \lim_{n \to \infty} \frac{\mu(n)}{n^2}
$$

が存在すると仮定する。以下の各小問に答えよ。

- (3-1) 不等式 $\gamma \geq 1/24$ が成り立つことを示せ。
- (3-2) 不等式 $\gamma \leq 1/6$ が成り立つことを示せ。


## **Kai**
### (1)
#### (1-1)
二項関係 $R$ が対称的であることは定義より自明（$k$ と $l$ の $1$ より大きい公約数は勿論 $l$ と $k$ の公約数である）。

#### (1-2)
二項関係 $R$ が推移的ではない。

３つの整数 $l=3, k=6, n=2$ を考える。$l R k$ かつ $k R n$ であるが、$l R n$ とは言えない。

### (2)
#### (2-1)
$E_6 = \{ \{2,4\}, \{2,6\}, \{3,6\}, \{4,6\} \}$ なので、$m(6)=4$、連結成分の数は $3$ であることがわかる。

#### (2-2)
（偶数の集合）

$$
V = \{ 2, 4, 6, 8, 10 \}
$$

#### (2-3)
任意の偶数のペア $(k,l)$ に対して、少なくとも $2$ が $k$ と $l$ の公約数であるので、

$$
\begin{aligned}
m(n) = |E_n| &\geq |E_n^{\text{even}} = \{\{k,l\} \mid k \text{ and } l \text{ are even}\}| \\
&\geq \frac{1}{2} \left( \frac{n}{2} - 1 \right) \left(\frac{n}{2} - 2 \right) \\
&(\text{there are at least } \frac{n}{2}-1 \text{ even numbers})
\end{aligned}
$$

### (3)
#### (3-1)
(2-3) より

$$
\begin{aligned}
\gamma &= \lim_{n \to \infty} \frac{\mu(n)}{n^2} \\ 
&\geq \lim_{n \to \infty} \frac{\frac{1}{n} \sum_{k=1}^n \frac{1}{2} \left( \frac{k}{2} - 1 \right) \left(\frac{k}{2} - 2 \right)}{n^2} \\
&= \lim_{n \to \infty} \frac{1}{n^3} \sum_{k=1}^n \left( \frac{k^2}{8} - \frac{3k}{4} + 1 \right) \\
&= \lim_{n \to \infty} \frac{1}{n^3} \left(\frac{1}{8} \left( \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6} \right) - \frac{3n^2 + 3n}{8} + n \right) \\
&= \lim_{n \to \infty} \left( \frac{1}{24} + \frac{1}{16n} + \frac{1}{48n^2} - \frac{3}{8n} - \frac{3}{8n^2} + \frac{1}{n^2} \right ) \\
&= \frac{1}{24}
\end{aligned}
$$

#### (3-2)
頂点数が $n$ の多重辺と自己ループを持たない完全無向グラフの辺の数は $n(n-1)/2$ なので、

$$
\begin{aligned}
\gamma &= \lim_{n \to \infty} \frac{\mu(n)}{n^2} \\ 
&\leq \lim_{n \to \infty} \frac{1}{n^3} \sum_{k=1}^n \left( \frac{1}{2} k(k-1)  \right) \\
&= \lim_{n \to \infty} \frac{1}{n^3} \left( \frac{n^3}{6} + \frac{n^2}{4} + \frac{n}{12} - \frac{n^2}{4} - \frac{n}{4} \right ) \\
&= \frac{1}{6}
\end{aligned}
$$