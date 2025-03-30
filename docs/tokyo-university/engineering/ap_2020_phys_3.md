---
sidebar_label: '物理工学専攻 2020年度 物理学 第3問'
sidebar_position: 1
---

# 東京大学 工学系研究科 物理工学専攻 2020年度 物理学 第3問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
固体表面における原子の吸着現象の簡単なモデルとして、原子が吸着できる場所（吸着サイト）が $N_a$ 個並んだ吸着格子と単原子理想気体が接した系を考える（図 1 を参照）。
なお、この系はボルツマン統計に従うものとする。
各吸着サイトは互いに独立で、それぞれ原子が吸着していないか、1つだけ吸着しているかのいずれかの状態をとるものとし、それぞれの状態のエネルギーを $0, -\varepsilon$ とする ($\varepsilon > 0$)。
各原子の質量を $m$ とし、原子の内部自由度は考えない。
この系全体は、温度 $T$、化学ポテンシャル $\mu$ の熱平衡状態にあるものとする。
ボルツマン定数を $k_B$、逆温度を $\beta=1/(k_BT)$、プランク定数を $2 \pi$ で割ったものを $h$ とする。

\[1\] まず、単原子理想気体のみを考える。体積 $V$ 中の単原子 $N$ 個からなる理想気体の分配関数は

$$
Z^{(g)}(V, \beta, N) = \frac{V^N}{N!}
\left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3N/2}  \tag{1}
$$

で与えられることを示せ。

\[2\] 式 (1) を用いて、大分配関数 $Z^{(g)}_G(V, \beta, N) = \sum_{N=0}^\infty Z^{(g)}(V, \beta, N) e^{\beta \mu N}$ を求めよ。

\[3\] 理想気体の圧力 $P$ は、$Z^{(g)}_G$ を用いて $P(\beta,\mu)=\frac{1}{\beta} \frac{\partial}{\partial V} \log Z^{(g)}_G(V, \beta, N)$ と与えられる。これに問 \[2\] の結果を用いることで、$P(\beta,\mu)$ の表式を求めよ。

\[4\] 次に、この単原子理想気体が吸着格子に接している状況を考える。1つの吸着サイトに着目し、それがとりうる状態に関する大分配関数 $\xi_G^{(a)}$ を求めよ。

\[5\] 吸着格子全体の大分配関数は $Z^{(a)}_G = (\xi_G^{(a)})^{N_a}$ で与えられる。これを用いて、吸着している原子の密度 $n_a$ （吸着原子の総数を $N_a$ で割ったもの）を求めよ。

\[6\] 問 \[3\] と \[5\] の結果を用いて、吸着原子密度 $n_a$ を圧力 $P$ と温度 $T$ の関数として表せ。

\[7\] 問 \[6\] で得られた $n_a$ を、温度 $T$ 一定のもとで圧力 $P$ の関数として図示せよ。また、圧力 $P$ 一定のもとで温度 $T$ の関数としても図示せよ。

## **Kai**
### \[1\]
まず、1粒子について考えると、空間積分は体積 $V$ となる。
また、運動量に関する積分は、1成分について、次のように計算できる：

$$
\begin{aligned}
\int_{-\infty}^\infty e^{- \beta \frac{p^2}{2m}} dp
= \sqrt{\frac{2 \pi m}{\beta}}
\end{aligned}
$$

よって、全体の分配関数は、

$$
\begin{aligned}
Z^{(g)}(V, \beta, N)
&= \frac{1}{N!} \frac{V^N}{(2 \pi \hbar)^{3N}}
\left( \frac{2 \pi m}{\beta} \right)^{3N/2}
\\
&= \frac{V^N}{N!}
\left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3N/2}
\end{aligned}
$$

となる。

### \[2\]

$$
\begin{aligned}
Z_G^{(g)}(V, \beta, \mu)
&=
\sum_{N=0}^\infty Z^{(g)}(V, \beta, N) e^{\beta \mu N}
\\
&=
\sum_{N=0}^\infty
\frac{V^N}{N!} \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3N/2}
e^{\beta \mu N}
\\
&=
\sum_{N=0}^\infty \frac{1}{N!} \left[
V \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\right]^N
\\
&=
\exp \left[
V \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\right]
\end{aligned}
$$

### \[3\]

$$
\begin{aligned}
P(\beta, \mu)
&=
\frac{1}{\beta} \frac{\partial}{\partial V} \log Z_G^{(g)}(V, \beta, \mu)
\\
&=
\frac{1}{\beta} \frac{\partial}{\partial V}
\left[
V \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\right]
\\
&=
\frac{1}{\beta}
\left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\\
&=
\left( \frac{m}{2 \pi \hbar^2} \right)^{3/2}
\frac{e^{\beta \mu}}{\beta^{5/2}}
\end{aligned}
$$

### \[4\]

$$
\begin{aligned}
\xi_G^{(a)} (\beta, \mu)
&=
e^{-\beta \cdot 0} \cdot e^{\beta \mu \cdot 0}
+ e^{-\beta \cdot (-\varepsilon)} \cdot e^{\beta \mu \cdot 1}
\\
&=
1 + e^{\beta (\mu + \varepsilon)}
\end{aligned}
$$

### \[5\]
吸着格子全体の大分配関数は、

$$
\begin{aligned}
\Xi_G^{(a)} (\beta, \mu, N_a)
&=
\left( \xi_G^{(a)} (\beta, \mu) \right)^{N_a}
\\
&=
\left( 1 + e^{\beta (\mu + \varepsilon)} \right)^{N_a}
\end{aligned}
$$

であり、グランドポテンシャルは、

$$
\begin{aligned}
\Omega (\beta, \mu, N_a)
&= - \frac{1}{\beta} \log \Xi_G^{(a)} (\beta, \mu, N_a)
\\
&=
- \frac{N_a}{\beta}
\log \left( 1 + e^{\beta (\mu + \varepsilon)} \right)
\end{aligned}
$$

であり、よって、

$$
\begin{aligned}
N_a n_a
&= - \frac{\partial \Omega (\beta, \mu, N_a)}{\partial \mu}
\\
&=
\frac{N_a}{\beta}
\frac{e^{\beta (\mu + \varepsilon)} \cdot \beta}
{1 + e^{\beta (\mu + \varepsilon)} }
\\
&=
N_a \frac{1}{1 + e^{- \beta (\mu + \varepsilon)} }
\\
\therefore \ \ \ \ 
n_a
&=
\frac{1}{1 + e^{- \beta (\mu + \varepsilon)} }
\end{aligned}
$$

である。

### \[6\]
\[3\] より、

$$
\begin{aligned}
e^{- \beta \mu}
=
\left( \frac{m}{2 \pi \hbar^2} \right)^{3/2}
\frac{1}{\beta^{5/2} P}
\end{aligned}
$$

であるから、これを \[5\] に代入して、

$$
\begin{aligned}
n_a
&=
\frac{1}{1 + 
\left( \frac{m}{2 \pi \hbar^2} \right)^{3/2}
\frac{e^{- \beta \varepsilon}}{\beta^{5/2} P}
}
\end{aligned}
$$

を得る。

### \[7\]