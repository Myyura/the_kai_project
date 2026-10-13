---
sidebar_label: "2022年7月実施 情報数理学 数理基礎"
tags:
  - Osaka-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Basics.Convolution-of-Independent-Random-Variables
  - Probability-Statistics.Probability-Basics.Conditional-Density
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Minimum-Variance-Linear-Unbiased-Combination
---

# 大阪大学 情報科学研究科 情報数理学専攻 2022年7月実施 情報数理学 数理基礎

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### 1. 線形計画問題

次の線形計画問題 $P$ について、以下の問いに答えよ。

$$
\begin{array}{ll}
P:\ \text{最小化}&-6x_1-8x_2+7x_3-9x_4\\[2pt]
\text{条件}&2x_2-x_3+3x_4=6,\\
&-2x_1+x_3-4x_4\ge8,\\
&x_1-x_2+2x_4\ge-7,\\
&-3x_1+4x_2-2x_3\ge9,\\
&x_2\ge0,\quad x_3\ge0,\quad x_4\ge0.
\end{array}
$$

(1) $x_3=3$、$x_4=1$ を満たす実行可能解について、$x_1,x_2$ の条件を求めよ。

(2) $P$ の双対問題を示せ。

(3) $P$ の最適値が $0$ であることを説明せよ。

### 2. 指数分布と条件付き分布

確率変数 $X,Y$ が互いに独立で，ともに平均が $1$ の指数分布に従うとする。$Z=X+Y$ とおく。以下の問いに答えなさい。

(1) $Z$ の確率密度関数を求めなさい。

(2) 確率分布の再生性とは何か。指数分布には再生性があるか。説明しなさい。

(3) $Z=z$ のときの $X$ の条件付き確率密度関数を求めなさい。

### 3. 平均の逐次推定

母平均が $\mu$、母分散が $\sigma^2$ の母集団から標本データ $x_k$（$k=1,2,\ldots$）が独立に逐次得られるとする。母平均 $\mu$ の推定量 $\widehat\mu_k$ を差分方程式

$$
\widehat\mu_k=\alpha_k\widehat\mu_{k-1}+\beta_kx_k,
\qquad \widehat\mu_0=1
$$

に基づいて定める。ただし、$\alpha_k,\beta_k$ は定数とする。

(1) $\widehat\mu_1$ が不偏推定量になるように $\alpha_1,\beta_1$ を定めよ。

(2) (1) のように $\alpha_1,\beta_1$ を選ぶとき、$\widehat\mu_2$ が不偏推定量になり、その分散が最小になるように $\alpha_2,\beta_2$ を定めよ。

(3) (1)、(2) のように $\alpha_1,\beta_1,\alpha_2,\beta_2$ を選ぶとき、$\widehat\mu_3$ が不偏推定量になり、その分散が最小になるように $\alpha_3,\beta_3$ を定めよ。

(4) 逐次得られる $\widehat\mu_k$（$k=1,2,\ldots$）が不偏推定量になり、その分散が最小になるように $\alpha_k,\beta_k$ を定めよ。

#### 题目描述

**1. 线性规划**

考虑线性规划问题 $P$：最小化 $-6x_1-8x_2+7x_3-9x_4$，约束为

$$
\begin{cases}
2x_2-x_3+3x_4=6,\\
-2x_1+x_3-4x_4\ge8,\\
x_1-x_2+2x_4\ge-7,\\
-3x_1+4x_2-2x_3\ge9,\\
x_2,x_3,x_4\ge0.
\end{cases}
$$

其中 $x_1$ 没有符号限制。

(1) 对满足 $x_3=3$、$x_4=1$ 的可行解，求 $x_1,x_2$ 应满足的条件。

(2) 写出 $P$ 的对偶问题。

(3) 说明 $P$ 的最优值为 $0$。

**2. 指数分布与条件分布** 随机变量 $X,Y$ 相互独立，均服从均值为 $1$ 的指数分布。令 $Z=X+Y$。

(1) 求 $Z$ 的概率密度函数。

(2) 什么是概率分布的再生性？指数分布是否具有再生性？请说明。

(3) 求给定 $Z=z$ 时 $X$ 的条件概率密度函数。

**3. 均值的递推估计**

从总体均值为 $\mu$、方差为 $\sigma^2$ 的总体中，依次独立取得样本 $x_k$（$k=1,2,\ldots$）。通过

$$
\widehat\mu_k=\alpha_k\widehat\mu_{k-1}+\beta_kx_k,
\qquad\widehat\mu_0=1
$$

定义均值估计量，其中 $\alpha_k,\beta_k$ 均为常数。

(1) 确定 $\alpha_1,\beta_1$，使 $\widehat\mu_1$ 无偏。

(2) 使用 (1) 的系数，确定 $\alpha_2,\beta_2$，使 $\widehat\mu_2$ 无偏且方差最小。

(3) 使用 (1)、(2) 的系数，确定 $\alpha_3,\beta_3$，使 $\widehat\mu_3$ 无偏且方差最小。

(4) 确定一般的 $\alpha_k,\beta_k$，使各步递推估计量 $\widehat\mu_k$ 均无偏且方差最小。

## **Kai**

### 1. 線形計画問題

#### (1)

等式制約に $x_3=3$、$x_4=1$ を代入すると $x_2=3$ となる。残りの三つの不等式は、それぞれ

$$
x_1\le-\frac92,\qquad x_1\ge-6,\qquad x_1\le-1
$$

となるので、求める条件は

$$
\boxed{-6\le x_1\le-\frac92,\qquad x_2=3}.
$$

#### (2)

四つの制約に対応する双対変数を順に $y_1,y_2,y_3,y_4$ とする。第1制約が等式なので $y_1$ は自由変数であり、残りは $y_2,y_3,y_4\ge0$ となる。また、主問題の $x_1$ は自由変数なので、対応する双対制約は等式である。したがって双対問題は

$$
\boxed{
\begin{array}{ll}
D:\ \text{最大化}&6y_1+8y_2-7y_3+9y_4\\[2pt]
\text{条件}&-2y_2+y_3-3y_4=-6,\\
&2y_1-y_3+4y_4\le-8,\\
&-y_1+y_2-2y_4\le7,\\
&3y_1-4y_2+2y_3\le-9,\\
&y_1\in\mathbb R,\quad y_2,y_3,y_4\ge0.
\end{array}}
$$

#### (3)

双対問題の四つの制約にそれぞれ $-1$ を掛けると

$$
\begin{cases}
2y_2-y_3+3y_4=6,\\
-2y_1+y_3-4y_4\ge8,\\
y_1-y_2+2y_4\ge-7,\\
-3y_1+4y_2-2y_3\ge9,
\end{cases}
\qquad y_2,y_3,y_4\ge0.
$$

これは $P$ の実行可能領域と同一である。その領域を $S$、$P$ の目的関数を $f$ とおくと

$$
P:\ \min_{\boldsymbol x\in S}f(\boldsymbol x),
\qquad
D:\ \max_{\boldsymbol y\in S}\{-f(\boldsymbol y)\}
$$

と書ける。(1) より $S\ne\varnothing$ なので、両問題は実行可能であり、弱双対性により最適値は有限である。$P$ の最適値を $v$ とすれば $D$ の最適値は $-v$ であり、強双対定理から $v=-v$ を得る。したがって

$$
\boxed{v=0}.
$$

実際、$\boldsymbol x=(-4,3,0,0)^T$ はすべての制約を満たし、目的関数値も $24-24=0$ となる。

### 2. 指数分布と条件付き分布

#### (1)

$X,Y$ の密度はともに $f_X(u)=f_Y(u)=e^{-u}$（$u\ge0$），$0$（$u<0$）である。独立性より，$z\ge0$ に対して

$$
f_Z(z)=\int_0^z f_X(x)f_Y(z-x)\,dx
=\int_0^z e^{-x}e^{-(z-x)}\,dx=ze^{-z}.
$$

したがって

$$
\boxed{
f_Z(z)=
\begin{cases}
ze^{-z},&z\ge0,\\
0,&z<0.
\end{cases}
}
$$

#### (2)

再生性とは，同じ分布族に従う独立な確率変数の和も，パラメータを変えることで同じ分布族に属する性質である。

(1) で得た $Z$ の密度 $ze^{-z}$ は，どの $\lambda>0$ に対しても指数分布の密度 $\lambda e^{-\lambda z}$ と一致しない。実際，$z\to0+$ における極限は前者が $0$，後者が $\lambda>0$ である。よって

$$
\boxed{\text{指数分布は再生性を持たない。}}
$$

#### (3)

変数変換 $(X,Y)\mapsto(X,Z)=(X,X+Y)$ の逆変換は $(x,z)\mapsto(x,z-x)$ で，そのヤコビアンの絶対値は $1$ である。したがって同時密度は

$$
f_{X,Z}(x,z)=
\begin{cases}
e^{-x}e^{-(z-x)}=e^{-z},&0\le x\le z,\\
0,&\text{その他}.
\end{cases}
$$

$z>0$ に対して，条件付き密度は

$$
\boxed{
f_{X\mid Z}(x\mid z)
=\frac{f_{X,Z}(x,z)}{f_Z(z)}
=\begin{cases}
\dfrac1z,&0\le x\le z,\\
0,&\text{その他}.
\end{cases}
}
$$

すなわち，$X\mid Z=z$ は区間 $[0,z]$ 上の一様分布に従う。

### 3. 平均の逐次推定

#### (1)

$\widehat\mu_0=1$ なので、$E[\widehat\mu_1]=\alpha_1+\beta_1\mu$ である。不偏性はすべての母平均 $\mu$ に対して成立する必要があるから、係数を比較して

$$
\boxed{\alpha_1=0,\qquad\beta_1=1}.
$$

したがって $\widehat\mu_1=x_1$、$\operatorname{Var}(\widehat\mu_1)=\sigma^2$ である。

#### (2)

不偏性の条件は $\alpha_2+\beta_2=1$ である。$\widehat\mu_1=x_1$ と $x_2$ は独立なので、

$$
\begin{aligned}
\operatorname{Var}(\widehat\mu_2)
&=(\alpha_2^2+\beta_2^2)\sigma^2\\
&=\left\{2\left(\alpha_2-\frac12\right)^2+\frac12\right\}\sigma^2.
\end{aligned}
$$

よって

$$
\boxed{\alpha_2=\beta_2=\frac12,\qquad
\operatorname{Var}(\widehat\mu_2)=\frac{\sigma^2}{2}}.
$$

#### (3)

$\widehat\mu_2=(x_1+x_2)/2$ と $x_3$ は独立である。不偏性の条件 $\alpha_3+\beta_3=1$ のもとで

$$
\begin{aligned}
\operatorname{Var}(\widehat\mu_3)
&=\left(\frac{\alpha_3^2}{2}+\beta_3^2\right)\sigma^2\\
&=\left\{\frac32\left(\alpha_3-\frac23\right)^2+\frac13\right\}\sigma^2.
\end{aligned}
$$

したがって

$$
\boxed{\alpha_3=\frac23,\qquad\beta_3=\frac13,\qquad
\operatorname{Var}(\widehat\mu_3)=\frac{\sigma^2}{3}}.
$$

#### (4)

$\widehat\mu_n$ が不偏で $\operatorname{Var}(\widehat\mu_n)=\sigma^2/n$ と仮定する。$\widehat\mu_n$ は $x_1,\ldots,x_n$ の関数なので、$x_{n+1}$ と独立である。不偏性の条件は $\alpha_{n+1}+\beta_{n+1}=1$ であり、

$$
\begin{aligned}
\operatorname{Var}(\widehat\mu_{n+1})
&=\left(\frac{\alpha_{n+1}^2}{n}+\beta_{n+1}^2\right)\sigma^2\\
&=\left\{\frac{n+1}{n}
\left(\alpha_{n+1}-\frac{n}{n+1}\right)^2
+\frac1{n+1}\right\}\sigma^2.
\end{aligned}
$$

よって $\alpha_{n+1}=n/(n+1)$、$\beta_{n+1}=1/(n+1)$ で最小分散 $\sigma^2/(n+1)$ を得る。(1) を初期段階とする帰納法により、

$$
\boxed{\alpha_k=\frac{k-1}{k},\qquad\beta_k=\frac1k
\quad(k=1,2,\ldots)}.
$$

この更新で得られる推定量は標本平均であり、

$$
\boxed{\widehat\mu_k=\frac1k\sum_{j=1}^k x_j,\qquad
E[\widehat\mu_k]=\mu,\qquad
\operatorname{Var}(\widehat\mu_k)=\frac{\sigma^2}{k}}.
$$

$\sigma^2>0$ なら各段階の最小化係数は一意である。$\sigma^2=0$ でも上記の選択は最適だが、$k\ge2$ では $\alpha_k+\beta_k=1$ を満たす任意の係数で分散が $0$ となる。

## **Reference**

- [大阪大学公式問題（2023年度入学、2022年7月30日実施、数理基礎：PDF p.4）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/IPS_nyushi_2023_JA.pdf)
