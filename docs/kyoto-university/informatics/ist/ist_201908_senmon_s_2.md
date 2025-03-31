---
sidebar_label: "2019年8月実施 専門科目 S-2"
sidebar_position: 7
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2019年8月実施 専門科目 S-2

## **Author**
[Miyake](https://miyake.github.io/)

## **Description**
### 日本語版
#### 設問1
確率変数 $X$ が $n=4, p=0.5$ の 二項分布に従うとする。このとき、$X=2$となる確率 $P(X=2)$ の値を求めよ。

#### 設問2
あるコインの表と裏が出る確率に偏りがあるかどうかを検定したい。このコインを $5$ 回投げたとき（独立試行）、表が $1$ 回、裏が $4$ 回出たとする。裏表に偏りがないことを帰無仮説としたとき、この観測の $P$ 値（両側検定）を求めよ。

#### 設問3
有意水準 $\alpha=0.05$ で $n$ 個の独立仮説を検定する際、すべてについて帰無仮説が正しいにもかかわらず、少なくとも一つの帰無仮説を棄却してしまう確率を求めよ。

#### 設問4
平均 $\mu$ が未知、分散が既知で $\sigma^2=10$ の正規分布からサイズ $5$の標本を抽出したところ、平均は $12$であった。標準正規分布に従う確率変数 $Y$について、 $P(-1.96 \le Y \le 1.96)=0.95$が成り立つことを利用して、 $\mu$ の $95\%$ 信頼区間を求めよ。

#### 設問5
結果から見出した仮説を、あたかも事前に立てた仮説であるかのように提示する行為は、HARKing (Hypothesizing After the Results are Known) と呼ばれる。統計検定に基づく研究において HARKing が不適切である理由を、統計学用語を用いて説明せよ。


## **Kai**
2項係数を
$\begin{pmatrix} n \\ k \end{pmatrix}$
のように表す。

### 設問1

$$
\begin{aligned}
P(X=2)
=
\begin{pmatrix} 4 \\ 2 \end{pmatrix}
\left( \frac{1}{2} \right)^2
\left( \frac{1}{2} \right)^2
=
\frac{6}{2^4}
=
\frac{3}{8}
\end{aligned}
$$

### 設問2

$$
\begin{aligned}
\left(
\begin{pmatrix} 5 \\ 0 \end{pmatrix}
+ \begin{pmatrix} 5 \\ 1 \end{pmatrix}
+ \begin{pmatrix} 5 \\ 4 \end{pmatrix}
+ \begin{pmatrix} 5 \\ 5 \end{pmatrix}
\right)
\left( \frac{1}{2} \right)^5
=
\frac{1+5+5+1}{2^5}
=
\frac{3}{8}
\end{aligned}
$$

### 設問3

$$
\begin{aligned}
1 - (0.95)^n
\end{aligned}
$$

### 設問4
サイズ5の標本平均 $\bar{X}$ の平均は $\mu$ ,
分散は $\sigma^2/5 = 10/5 = 2$ であるから、

$$
\begin{aligned}
P
\left( - 1.96 \leq \frac{\bar{X} - \mu}{\sqrt{2}} \leq 1.96 \right)
=
0.95
\\
\therefore \ \ 
P
\left( \bar{X} - 1.96 \sqrt{2} \leq \mu
\leq \bar{X} + 1.96 \sqrt{2} \right)
=
0.95
\end{aligned}
$$

よって、求める信頼区間は

$$
\begin{aligned}
\left\{ x | 12 - 1.96 \sqrt{2} \leq x
\leq 12 + 1.96 \sqrt{2} \right\}
\end{aligned}
$$

である。

### 設問5
略