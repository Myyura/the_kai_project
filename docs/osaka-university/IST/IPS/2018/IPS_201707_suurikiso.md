---
sidebar_label: "2017年7月実施 情報数理学 数理基礎"
tags:
  - Osaka-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 大阪大学 情報科学研究科 情報数理学専攻 2017年7月実施 情報数理学 数理基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 1

$e$ を全成分が1のベクトルとする。

(1) $A\in\mathbb R^{m\times n}$, $b\in\mathbb R^m$ に対し、$Ax=b$ のもとで $\|x\|_1=\sum_i|x_i|$ を最小化する問題が、次の線形計画問題と等価であることを説明せよ。

$$
\min e^Tu^++e^Tu^-\quad\text{subject to }Au^+-Au^-=b,\quad u^+,u^-\ge0.
$$

(2) 点 $(x_i,y_i)$（$i=1,\ldots,n$）への直線 $\hat y_i=ax_i+b$ の当てはめで、$\sum_i|y_i-\hat y_i|$ を最小化する問題の双対が

$$
\max y^Tv\quad\text{subject to }x^Tv=0,\quad e^Tv=0,\quad-e\le v\le e
$$

となることを説明せよ。ただし $x=(x_i)^T$, $y=(y_i)^T$, $v=(v_i)^T$。

(3) 双対最適解 $v^*$ で $-1<v_k^*<1$ となる点 $(x_k,y_k)$ と、当てはめた直線の関係を述べよ。

### 2

単位円周上にランダムに2点を取り、その間の線分の長さを $X$ とする。

(1) $P(X\le1)$、(2) 分布関数 $F(x)$、(3) 確率密度関数、(4) 期待値を求めよ。

### 3

$\theta>0$ とし、密度 $f(x)=\theta^{-1}x^{1/\theta-1}$（$0\le x\le1$）に従う確率変数 $X$ を考える。

(1) $E[X]$、(2) $E[\log X]$、(3) 独立標本 $X_1,\ldots,X_n$ による $\theta$ の最尤推定量 $\hat\theta$ を求めよ。(4) $\hat\theta$ が不偏であることを示せ。

## **Kai**

### 1

(1) 任意の実行可能な $x$ に対し、$u_i^+=\max(x_i,0)$, $u_i^-=\max(-x_i,0)$ とすれば、$x=u^+-u^-$ かつ $e^T(u^++u^-)=\|x\|_1$ である。逆に実行可能な $(u^+,u^-)$ から $x=u^+-u^-$ を作ると $Ax=b$ で、

$$
\|x\|_1\le e^T(u^++u^-).
$$

よって両問題の最適値は等しい。最適な $(u^+,u^-)$ で同一成分がともに正なら、共通分を減らして目的値を下げられるため、最適解も対応する。

(2) 残差を $d=y-ax-be$ とおき、制約 $y-ax-be-d=0$ に対するラグランジアンを

$$
L=\|d\|_1+v^T(y-ax-be-d)
$$

とする。$a,b,d$ についての下限が有限となる条件は

$$
x^Tv=e^Tv=0,\qquad |v_i|\le1,
$$

であり、そのとき下限は $y^Tv$。したがって設問の双対問題を得る。

(3) 最適残差 $d^*=y-a^*x-b^*e$ について、強双対性より

$$
0=\sum_i\bigl(|d_i^*|-v_i^*d_i^*\bigr).
$$

各項は非負で、$|v_k^*|<1$ のとき第 $k$ 項が0になるには $d_k^*=0$ が必要である。よって $\boxed{y_k=a^*x_k+b^*}$、すなわち点は最適直線上にある。

### 2

2点のなす小さい中心角を $\Theta$ とすると $\Theta\sim U[0,\pi]$ であり、$X=2\sin(\Theta/2)$。

(1) $X\le1\iff\Theta\le\pi/3$ より $\boxed{P(X\le1)=1/3}$。

(2)

$$
\boxed{F(x)=\begin{cases}0&x<0,\\\dfrac2\pi\arcsin\dfrac x2&0\le x\le2,\\1&x>2.\end{cases}}
$$

(3) $F$ を微分して

$$
\boxed{f_X(x)=\frac{2}{\pi\sqrt{4-x^2}}\quad(0<x<2)}
$$

を得る。区間外では0である。

(4)

$$
\boxed{E[X]=\frac1\pi\int_0^\pi2\sin\frac\theta2\,d\theta=\frac4\pi}.
$$

### 3

(1)

$$
\boxed{E[X]=\frac1\theta\int_0^1x^{1/\theta}\,dx=\frac1{1+\theta}}.
$$

(2) $\int_0^1x^{a-1}\log x\,dx=-1/a^2$（$a>0$）より

$$
\boxed{E[\log X]=-\theta}.
$$

(3) 対数尤度は

$$
\ell(\theta)=-n\log\theta+(\theta^{-1}-1)\sum_i\log X_i.
$$

したがって $\ell'(\theta)=(-n\theta-\sum_i\log X_i)/\theta^2$。微分の符号が正から負に変わる点より

$$
\boxed{\hat\theta=-\frac1n\sum_{i=1}^n\log X_i}.
$$

(4) (2)から $E[\hat\theta]=-n^{-1}\sum_iE[\log X_i]=\theta$。よって不偏推定量である。
