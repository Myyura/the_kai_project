---
sidebar_label: "2024年度 数理科学 [II-7]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Chi-Square-Distribution
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-7]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$(\mu_1,\mu_2)\in\mathbb R^2$ とし、実数値確率変数 $Y_1,Y_2$ は独立で $Y_j\sim N(\mu_j,1)$ とする。$Y_1^2+Y_2^2$ の分布を自由度2、非心度 $\mu_1^2+\mu_2^2$ の非心カイ二乗分布という。その累積分布関数を $F(x;2,\lambda^2)$（$\lambda\ge0$）とする。$\Phi,g$ は標準正規分布の累積分布関数と密度、$f_1$ は自由度1のカイ二乗密度とする。

(1) $\lambda\ge0,x\ge0$ に対して

$$
F(x;2,\lambda^2)=\int_0^x\{\Phi(\lambda+\sqrt{x-v})-\Phi(\lambda-\sqrt{x-v})\}f_1(v)\,dv
$$

を示せ。

(2) $\lambda_2\ge\lambda_1\ge0,x\ge0$ に対して

$$
\begin{aligned}
F(x;2,\lambda_1^2)-F(x;2,\lambda_2^2)
=\int_0^x\int_{\lambda_1-\sqrt{x-v}}^{\lambda_2-\sqrt{x-v}}
\left[1-e^{-2\sqrt{x-v}(u+\sqrt{x-v})}\right]g(u)f_1(v)\,du\,dv
\end{aligned}
$$

を示せ。

(3) 同じ条件で $F(x;2,\lambda_2^2)\le F(x;2,\lambda_1^2)$ を示せ。

(4) $\theta>0$ とし、$\Omega$ を原点中心・半径 $\theta$ の閉円板とする。$0<\alpha<1$ に対し、$H_0:(\mu_1,\mu_2)\in\Omega$ 対 $H_1:(\mu_1,\mu_2)\in\Omega^c$ の検定関数 $\varphi:\mathbb R^2\to\{0,1\}$ で

$$
E_\mu[\varphi]\le\alpha\ (\mu\in\Omega),\qquad E_\mu[\varphi]\ge\alpha\ (\mu\in\Omega^c)
$$

を満たすものを1つ構成せよ。

## **Kai**

### (1)

標準2変量正規分布の回転不変性より、平均を $(\lambda,0)$ としてよい。$Y_2^2=v$ で条件付けると、$0\le v\le x$ に対して

$$
P(Y_1^2\le x-v)=\Phi(\sqrt{x-v}-\lambda)-\Phi(-\sqrt{x-v}-\lambda)
=\Phi(\lambda+\sqrt{x-v})-\Phi(\lambda-\sqrt{x-v}).
$$

これに $f_1(v)$ を掛けて $0\le v\le x$ で積分すればよい。

### (2)

$s=\sqrt{x-v}$ とし、$H(\lambda)=\Phi(\lambda+s)-\Phi(\lambda-s)$ とおく。

$$
\begin{aligned}
H(\lambda_1)-H(\lambda_2)
&=\int_{\lambda_1}^{\lambda_2}\{g(t-s)-g(t+s)\}\,dt\\
&=\int_{\lambda_1-s}^{\lambda_2-s}\{g(u)-g(u+2s)\}\,du.
\end{aligned}
$$

$g(u+2s)=g(u)e^{-2s(u+s)}$ を代入し、(1)に用いれば設問の式を得る。

### (3)

積分範囲では $s\ge0$, $u+s\ge\lambda_1\ge0$ である。従って $1-e^{-2s(u+s)}\ge0$ であり、(2)の右辺は非負となる。

### (4)

$F(c;2,\theta^2)=1-\alpha$ を満たす $c>0$ を取り、

$$
\boxed{\varphi(y_1,y_2)=1_{\{y_1^2+y_2^2>c\}}}
$$

とする。$\lambda^2=\mu_1^2+\mu_2^2$ とおくと

$$
E_\mu[\varphi]=1-F(c;2,\lambda^2).
$$

(3)よりこれは $\lambda$ の非減少関数であり、$\lambda=\theta$ で $\alpha$ に等しい。したがって帰無仮説内では $\alpha$ 以下、その外では $\alpha$ 以上となる。
