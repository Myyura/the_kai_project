---
sidebar_label: 2020年8月実施 選択問題 確率・オペレーションズリサーチ
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-and-Statistics-Basics.Negative-Binomial-Distribution
  - Probability-Statistics.Probability-and-Statistics-Basics.Mixed-Distribution
  - Probability-Statistics.Probability-and-Statistics-Basics.Normal-Distribution
  - Probability-Statistics.Probability-and-Statistics-Basics.Lognormal-Distribution
  - Probability-Statistics.Probability-and-Statistics-Basics.Moment-Generating-Function
  - Operations-Research.Optimization.Linear-Programming
---
# 電気通信大学 情報理工学研究科 情報学専攻 2020年8月実施 選択問題 確率・オペレーションズリサーチ

## **Author**
GPT-5.6 Sol

## **Description**

この科目では問1に必ず解答し、問2または問3の一方を選択する。ここではすべての問いを扱う。

### 問1

ある実験は、温度 $t$ K に応じて成功確率 $p(t)$ が変化する。成功を $1$、失敗を $0$ とする確率変数を $X$ とし、互いに独立な繰り返しを $X_1,X_2,\ldots$ と記す。

1. 温度 $t$ における最初の $n$ 回の総和

   $$
   S_n=\sum_{i=1}^nX_i
   $$

   の期待値 $E[S_n]$ を求めよ。
2. 同じ条件で、累計 $r$ 回成功するまでの総実験回数を $N_r$ とする。$E[N_r]$ を求めよ。
3. 成功確率が既知の定数 $\alpha,\beta$ を用いて

   $$
   p(t)=\frac{\exp(\alpha+\beta t)}{1+\exp(\alpha+\beta t)},
   \qquad \beta\ne0
   $$

   と与えられるとき、$E[N_r]=n$ を満たす温度 $t$ を求めよ。

### 問2 A

次の関数を累積分布関数にもつ確率分布を考える。

$$
F(x)=
\begin{cases}
0,&x<0,\\
\dfrac{2x}{5}+\dfrac15,&0\le x<\dfrac12,\\
\dfrac{2x}{5}+\dfrac25,&\dfrac12\le x<1,\\
1,&1\le x.
\end{cases}
$$

1. この分布に従う確率変数の標本空間を答えよ。
2. 確率変数 $X$ の期待値 $E[X]$ を求めよ。
3. 確率変数 $X$ の分散 $V[X]$ を求めよ。

### 問2 B

確率変数列 $X_i$ $(i=0,1,2,\ldots)$ が

$$
X_{i+1}\mid X_i\sim N(\mu+X_i,\sigma^2)
$$

を満たす。ただし $N(\mu,\sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布を表す。

1. $X_1$ の値を所与としたときの条件付期待値 $E[X_3\mid X_1]$ を求めよ。
2. 正規分布のモーメント母関数を求めよ。
3. $Y_i=\exp X_i$ と変換する。$Y_i$ を所与としたときの $Y_{i+1}$ の条件付期待値 $E[Y_{i+1}\mid Y_i]$ を求めよ。
4. $Y_0=a$ を定数として、$Y_n$ の期待値 $E[Y_n]$ を求めよ。

### 問3

ある企業が三種類の製品 $P_i$ $(i=1,2,3)$ を製造する。製品 $P_i$ を 1 kg 製造するための材料量 $w_i$、設備稼働時間 $h_i$、1 kg 当たりの利益 $r_i$、販売量の上限 $U_i$ は次の表で与えられる。

| $i$ | $w_i$ [kg] | $h_i$ [hour] | $r_i$ [$10^3$ yen] | $U_i$ [kg] |
|:---:|---:|---:|---:|---:|
| 1 | 1.5 | 0.5 | 1.0 | 150 |
| 2 | 2.0 | 0.8 | 1.2 | 100 |
| 3 | 2.5 | 1.0 | 1.4 | 80 |

材料の総利用可能量は $W=520$ kg、設備の総稼働時間の上限は $H=200$ hour である。製品 $P_i$ の製造量を $x_i$ kg とする。

1. 総利益を最大化する生産計画問題を線形計画問題として定式化せよ。
2. この線形計画問題を解き、最適解における各製品の製造量と総利益を求めよ。

## **Kai**

### 問1

#### (1)

$X_i$ は成功確率 $p(t)$ の Bernoulli 変数なので、期待値の線形性より

$$
\boxed{E[S_n]=\sum_{i=1}^nE[X_i]=np(t)}.
$$

#### (2)

一回の成功を得るまでの試行回数を $G_j$ とすると、$G_j$ は成功確率 $p(t)$ の幾何分布に従い、$E[G_j]=1/p(t)$ である。$N_r=G_1+\cdots+G_r$ だから、

$$
\boxed{E[N_r]=\frac{r}{p(t)}}.
$$

#### (3)

$E[N_r]=n$ より $p(t)=r/n$ である。有限の温度解が存在する $n>r$ の場合、

$$
\frac{p(t)}{1-p(t)}
=\exp(\alpha+\beta t)
=\frac{r}{n-r}.
$$

したがって

$$
\boxed{
t=\frac{\log\!\left(\dfrac{r}{n-r}\right)-\alpha}{\beta}
}.
$$

### 問2 A

CDF の跳びから

$$
P(X=0)=P\left(X=\frac12\right)=P(X=1)=\frac15
$$

であり、それ以外の $0<x<1$ では連続密度 $2/5$ をもつ。

#### (1)

自然な標本空間は

$$
\boxed{\Omega=[0,1]}
$$

と取れる。この分布の支持も $[0,1]$ である。

#### (2)

離散部分と連続部分を合わせると、

$$
\begin{aligned}
E[X]
&=\frac15\left(0+\frac12+1\right)
+\int_0^1x\frac25\,dx\\
&=\frac3{10}+\frac15
=\boxed{\frac12}.
\end{aligned}
$$

#### (3)

同様に

$$
\begin{aligned}
E[X^2]
&=\frac15\left(0^2+\left(\frac12\right)^2+1^2\right)
+\int_0^1x^2\frac25\,dx\\
&=\frac14+\frac2{15}=\frac{23}{60}.
\end{aligned}
$$

したがって

$$
\boxed{V[X]=E[X^2]-E[X]^2=\frac{23}{60}-\frac14=\frac2{15}}.
$$

### 問2 B

$\varepsilon_i\sim N(0,\sigma^2)$ を互いに独立として、

$$
X_{i+1}=X_i+\mu+\varepsilon_i
$$

と表せる。

#### (1)

$$
X_3=X_1+2\mu+\varepsilon_1+\varepsilon_2
$$

より、

$$
\boxed{E[X_3\mid X_1]=X_1+2\mu}.
$$

#### (2)

$Z\sim N(\mu,\sigma^2)$ のモーメント母関数は、平方完成により

$$
\boxed{M_Z(s)=E[e^{sZ}]
=\exp\left(\mu s+\frac{\sigma^2s^2}{2}\right)}.
$$

#### (3)

$Y_i=e^{X_i}$ であり、$Y_i$ は $X_i$ と一対一に対応する。正規分布のモーメント母関数に $s=1$ を代入して、

$$
\begin{aligned}
E[Y_{i+1}\mid Y_i]
&=E[e^{X_i+\mu+\varepsilon_i}\mid X_i]\\
&=e^{X_i+\mu}E[e^{\varepsilon_i}]\\
&=\boxed{Y_i\exp\left(\mu+\frac{\sigma^2}{2}\right)}.
\end{aligned}
$$

#### (4)

条件付期待値を反復して、$Y_0=a$ より

$$
\boxed{
E[Y_n]=a\exp\left(n\mu+\frac{n\sigma^2}{2}\right)
}.
$$

### 問3

#### (1)

線形計画問題は

$$
\begin{aligned}
\text{maximize}\quad
&z=x_1+1.2x_2+1.4x_3\\
\text{subject to}\quad
&1.5x_1+2x_2+2.5x_3\le520,\\
&0.5x_1+0.8x_2+x_3\le200,\\
&0\le x_1\le150,\\
&0\le x_2\le100,\\
&0\le x_3\le80
\end{aligned}
$$

である。目的関数の単位は $10^3$ yen である。

#### (2)

材料 1 kg 当たりの利益は順に

$$
\frac1{1.5}=\frac23,qquad
\frac{1.2}{2}=0.6,qquad
\frac{1.4}{2.5}=0.56
$$

である。設備時間制約を一旦外した緩和問題では、この順に上限まで生産することが最適である。$x_1=150$, $x_2=100$ とすると残る材料は

$$
520-1.5\cdot150-2\cdot100=95
$$

kg なので、$x_3=95/2.5=38$ となる。この点で設備時間は

$$
0.5\cdot150+0.8\cdot100+38=193\le200
$$

であり、元の問題にも実行可能である。したがって緩和問題の上界を達成しており、元の問題でも最適である。

$$
\boxed{(x_1,x_2,x_3)=(150,100,38)}
$$

総利益は

$$
\boxed{z=150+1.2\cdot100+1.4\cdot38=323.2}
$$

すなわち $323.2\times10^3$ yen である。
