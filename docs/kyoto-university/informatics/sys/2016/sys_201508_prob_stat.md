---
sidebar_label: 2015年8月実施 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Mean-Squared-Error
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Basics.Zero-Covariance-does-not-Imply-Independence
  - Probability-Statistics.Probability-Basics.Geometric-Probability
  - Probability-Statistics.Probability-Basics.Conditional-Density-by-Variable-Transformation
---

# 京都大学 情報学研究科 システム科学専攻 2015年8月実施 確率統計

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1

確率変数 $(X,Y)$ で表される母集団からの大きさ $n$ の無作為標本を $\{(X_1,Y_1),\ldots,(X_n,Y_n)\}$ とする。$X,Y$ は独立で、$E[X]=\mu_x,E[Y]=\mu_y,E[(X-\mu_x)^2]=v_x,E[(Y-\mu_y)^2]=v_y$ とする。

(1) $A=c_A(\sum_{i=1}^nX_i)(\sum_{i=1}^nY_i)$ が $\mu_x\mu_y$ の不偏推定量となるよう定数 $c_A$ を定めよ。

(2) (1) の $c_A$ による $A$ の分散を求めよ。

(3) $B=c_B\sum_{i=1}^nX_iY_i$ が $\mu_x\mu_y$ の不偏推定量となるよう定数 $c_B$ を定め、その平均二乗誤差と $A$ の平均二乗誤差を比較せよ。

(4) 母集団分布が正規分布のとき、(1) の $A$ が $\mu_x\mu_y$ の最尤推定量であることを示せ。

### 問題2

(1) $X,Y$ が独立で同じ分布に従うとき、$U=X+Y,V=X-Y$ は一般に独立か、一般に無相関かをそれぞれ理由とともに答えよ。

(2) (1) で $X,Y$ がそれぞれ標準正規分布に従うとき、$U,V$ は独立か、理由とともに答えよ。

(3) 図のように原点を中心とする半径1の円の第1象限の円弧上に $A,B$ をとる。$OA,OB$ が $x$ 軸となす角 $\Theta_A,\Theta_B$ は独立に区間 $[0,\pi/2)$ 上の一様分布に従う。$O$ から直線 $AB$ への垂線の長さを $\Psi$、直線 $AB$ と $x$ 軸がつくる図の角を $\Theta$ とする。$\Psi,\Theta$ の同時確率密度を求めよ。必要なら $d(\arccos x)/dx=-1/\sqrt{1-x^2}$ を用いてよい。

![円弧上の二点と直線 AB](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2016/sys_201508_prob_stat_chord.svg)

#### 题目描述

**问题1** 从随机变量 $(X,Y)$ 所表示的总体中取得容量为 $n$ 的随机样本 $\{(X_i,Y_i)\}_{i=1}^n$。$X,Y$ 相互独立，且均值分别为 $\mu_x,\mu_y$，方差分别为 $v_x,v_y$。

（1）确定常数 $c_A$，使 $A=c_A(\sum_iX_i)(\sum_iY_i)$ 为 $\mu_x\mu_y$ 的无偏估计量。（2）求此 $A$ 的方差。（3）确定 $c_B$，使 $B=c_B\sum_iX_iY_i$ 无偏，并比较 $A,B$ 的均方误差。（4）若总体分布是正态分布，证明 $A$ 是 $\mu_x\mu_y$ 的最大似然估计量。

**问题2** （1）若 $X,Y$ 独立同分布，判断 $U=X+Y,V=X-Y$ 一般是否独立、是否不相关，并说明理由。（2）若 $X,Y$ 独立且均服从标准正态分布，判断 $U,V$ 是否独立并说明理由。

（3）在以原点为中心的单位圆第一象限圆弧上取两点 $A,B$，它们与 $x$ 轴的夹角 $\Theta_A,\Theta_B$ 独立且均匀分布在 $[0,\pi/2)$。令 $\Psi$ 为原点到直线 $AB$ 的垂直距离，$\Theta$ 为图示直线与 $x$ 轴的角。求 $\Psi,\Theta$ 的联合概率密度。可用 $d(\arccos x)/dx=-1/\sqrt{1-x^2}$。


## **Kai**

### 問題1

(1) $X$ 標本全体と $Y$ 標本全体が独立なので、$E[A]=c_An^2\mu_x\mu_y$。よって $\boxed{c_A=1/n^2}$、$A=\bar X\bar Y$。

(2) 独立性より

$$
\begin{aligned}
\operatorname{Var}(A)
&=E[\bar X^2]E[\bar Y^2]-\mu_x^2\mu_y^2\\
&=\boxed{\frac{v_xv_y}{n^2}+\frac{v_x\mu_y^2+v_y\mu_x^2}{n}}.
\end{aligned}
$$

(3) $E[\sum_iX_iY_i]=n\mu_x\mu_y$ より $\boxed{c_B=1/n}$。両推定量は不偏なので平均二乗誤差は分散に等しく、

$$
\operatorname{MSE}(B)=\frac{v_xv_y+v_x\mu_y^2+v_y\mu_x^2}{n}.
$$

したがって

$$
\boxed{\operatorname{MSE}(B)-\operatorname{MSE}(A)
=\frac{n-1}{n^2}v_xv_y\ge0}.
$$

(4) 正規標本の対数尤度は $X,Y$ の項に分離し、各平均の最大化点は $\widehat\mu_x=\bar X,\widehat\mu_y=\bar Y$。最尤推定量の不変性から $\widehat{\mu_x\mu_y}=\bar X\bar Y=A$。分散も未知で標本分散が $0$ の場合は、正分散モデル内に尤度の最大値は存在しない。

### 問題2

(1) 一般には独立ではない。例えば独立な Bernoulli$(1/2)$ の $X,Y$ に対し、$U=0$ なら必ず $V=0$ であり、$P(V=0\mid U=0)=1\ne1/2=P(V=0)$。

有限な2次モーメントをもつ場合は

$$
\operatorname{Cov}(U,V)=\operatorname{Var}(X)-\operatorname{Var}(Y)=0
$$

なので無相関である。

(2) 正規ベクトルの線形変換なので $(U,V)$ は同時正規であり、(1) より無相関だから独立である。実際、$U,V$ はそれぞれ $N(0,2)$ に従い、

$$
f_{U,V}(u,v)=\frac1{4\pi}e^{-(u^2+v^2)/4}=f_U(u)f_V(v).
$$

(3) $M=(\Theta_A+\Theta_B)/2$、$D=|\Theta_A-\Theta_B|/2$ とおく。円の幾何から

$$
\Psi=\cos D,\qquad\Theta=\frac\pi2+M.
$$

$0<M<\pi/2$、$0<D<\min(M,\pi/2-M)$ であり、各 $(M,D)$ には $(\Theta_A,\Theta_B)=(M+D,M-D),(M-D,M+D)$ の2原像がある。それぞれの Jacobian の絶対値は $2$ なので

$$
f_{M,D}(m,d)=2\cdot2\cdot\frac4{\pi^2}=\frac{16}{\pi^2}.
$$

さらに $|dD/d\Psi|=1/\sqrt{1-\Psi^2}$ より

$$
\boxed{f_{\Psi,\Theta}(\psi,\theta)=
\begin{cases}
\displaystyle\frac{16}{\pi^2\sqrt{1-\psi^2}},&
\displaystyle\frac\pi2<\theta<\pi,\quad\max(\sin\theta,-\cos\theta)<\psi<1,\\[2mm]
0,&\text{その他}.
\end{cases}}
$$

