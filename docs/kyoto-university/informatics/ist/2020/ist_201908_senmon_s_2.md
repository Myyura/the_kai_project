---
sidebar_label: "2019年8月実施 専門科目 S-2"
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Exact-Binomial-Test
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Family-Wise-Error-Rate
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesizing-After-Results-Are-Known
---
# 京都大学 情報学研究科 知能情報学専攻 2019年8月実施 専門科目 S-2

## **Author**
[Miyake](https://miyake.github.io/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.ist.i.kyoto-u.ac.jp/content/files/admission/ist-exam-2019Aug-specialized.pdf)
### 日本語版
#### 設問1
確率変数 $X$ が $n=4, p=0.5$ の 二項分布に従うとする。このとき、$X=2$となる確率 $P(X=2)$ の値を求めよ。

#### 設問2
あるコインの表と裏が出る確率に偏りがあるかどうかを検定したい。このコインを $5$ 回投げたとき（独立試行）、表が $1$ 回、裏が $4$ 回出たとする。裏表に偏りがないことを帰無仮説としたとき、この観測の $P$ 値（両側検定）を求めよ。

#### 設問3
各検定の第1種の誤り確率がちょうど $0.05$ で、棄却事象が独立な場合は
有意水準 $\alpha=0.05$ で $n$ 個の独立仮説を検定する際、すべてについて帰無仮説が正しいにもかかわらず、少なくとも一つの帰無仮説を棄却してしまう確率を求めよ。

#名目有意水準だけを仮定し、実際の第1種の誤り確率が $0.05$ 以下の場合、この式は確率の上界となる。

#### 設問4
平均 $\mu$ が未知、分散が既知で $\sigma^2=10$ の正規分布からサイズ $5$の標本を抽出したところ、平均は $12$であった。標準正規分布に従う確率変数 $Y$について、 $P(-1.96 \le Y \le 1.96)=0.95$が成り立つことを利用して、 $\mu$ の $95\%$ 信頼区間を求めよ。

##### 設問5
結果から見出した仮説を、あたかも事前に立てた仮説であるかのように提示する行為は、HARKing (Hypothesizing After the Results are Known) と呼ばれる。統計検定に基づく研究において HARKing が不適切である理由を、統計学用語を用いて説明せよ。


### 题目描述

1. 随机变量 $X\sim\operatorname{Binomial}(n=4,p=0.5)$，求 $P(X=2)$。
2. 为检验一枚硬币正反面概率是否有偏，独立投掷 5 次，观察到正面 1 次、反面 4 次。以“硬币无偏”为零假设，求该观察的双侧检验 $P$ 值。
3. 以显著性水平 $\alpha=0.05$ 独立检验 $n$ 个假设，且所有零假设实际均为真。求至少错误拒绝一个零假设的概率。
4. 从均值 $\mu$ 未知、已知方差 $\sigma^2=10$ 的正态总体抽取容量 5 的样本，样本均值为 12。利用
   $P(-1.96\le Y\le1.96)=0.95$（$Y$ 为标准正态变量），求 $\mu$ 的 $95\%$ 置信区间。
5. HARKing 指把观察结果后才提出的假设呈现为事先提出。用统计学术语说明在基于显著性检验的研究中，这种做法为何不恰当。

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
同じデータを見て多数の仮説から都合のよいものを選び，その選択を無視した通常の検定を行うと，帰無仮説の下で $P$ 値の較正が失われ、通常の $P(P\le u)\le u$ という保証が保たれなくなる。その結果，名目有意水準より第1種の誤りが増える。仮説は事前登録するか，独立なデータで検証すべきである。
