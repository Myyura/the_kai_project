---
sidebar_label: "2019年度 II-3-AB（物理数学・実験）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Physics.Electromagnetism.Lorentz-Force-and-Charged-Particle-Motion
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年度 問題II-3-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A

$0\leq x\leq L$ の温度場が $\partial_tT=D\partial_x^2T$、$D>0$ に従い、両端で $\partial_xT(0,t)=\partial_xT(L,t)=0$ を満たす。

1. $T(x,t)=\sum_{n=0}^\infty a_n(t)\phi_n(x)$ と展開する。各 $a_n$ の方程式が他の係数を含まないような実関数 $\phi_n$ の具体例を挙げ、$a_n(t)$ を $a_n(0)$ で表せ。
2. $T_n(t)=\int_0^L\phi_n(x)T(x,t)dx$ と定義する。$a_n(0)\neq0$ のとき $T_n(t)/a_n(0)$ を積分を残さず表せ。
3. $T(x,0)=A[1-(2x/L-1)+(2x/L-1)^3/3]$ のとき、任意の $t$ で $\int_0^LT(x,t)dx$ を求めよ。

### II-3B

図1の領域 $0\leq y\leq L$ に一様な磁場 $\boldsymbol B=-B\boldsymbol e_z$、$B>0$ がある。正電荷 $e$ の粒子が $y<0$ から $+y$ 向きに入射する。磁場以外の力と相対論効果を無視する。$y=0,L$ の通過点を図1のように $(x_1,0),(x_2,L)$ とする。

![原題 図1：一様磁場中の粒子軌道と測定点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2019-II-3B-fig1.png)

1. 円弧軌道の半径 $\rho$ を運動量の大きさ $p$ で表せ。
2. 偏向角が十分小さいとき、$\rho$ を $L,x_1,x_2$ で表せ。
3. $x_1,x_2$ の独立な測定誤差の標準偏差がともに $\sigma_x$ で、他の誤差が無視できるとする。運動量の相対誤差 $\sigma_p/p$ を誤差伝播で求めよ。

#### 题目描述

A：一维温度场满足扩散方程与两端绝热边界。(1) 选取使展开系数解耦的实函数基并求各系数的时间变化；(2) 求基函数投影 $T_n(t)$ 与初始系数之比；(3) 对给定三次多项式初始温度，求温度的空间积分。

B：如上方图1，正电荷沿 $+y$ 进入 $0\le y\le L$ 的均匀纸内磁场，在两边界的横坐标为 $x_1,x_2$。(1) 求半径与动量的关系；(2) 小偏转近似下由两位置求半径；(3) 两位置各有独立标准差 $\sigma_x$，求动量的相对标准差。

## **Kai**

### II-3A

(1) $\phi_0=1$、$\phi_n=\cos(n\pi x/L)$ ($n\geq1$) と選ぶ。境界条件を満たし、$\phi_n''=-(n\pi/L)^2\phi_n$ なので

$$
\boxed{\dot a_n=-D(n\pi/L)^2a_n,\qquad
 a_n(t)=a_n(0)e^{-D(n\pi/L)^2t}.}
$$

(2) 余弦の直交性より

$$
\boxed{\frac{T_n(t)}{a_n(0)}=
\begin{cases}L &(n=0),\\(L/2)e^{-D(n\pi/L)^2t}&(n\geq1).
\end{cases}}
$$

(3) 熱方程式を積分すると $d\int_0^LTdx/dt=D[T_x]_0^L=0$。初期値の奇数べきの項は $x=L/2$ に関して反対称なので積分がゼロとなる。したがって

$$
\boxed{\int_0^LT(x,t)dx=AL.}
$$

### II-3B

(1) ローレンツ力と向心力から $pv/\rho=evB$、したがって $\boxed{\rho=p/(eB)}$。

(2) 正電荷は左へ曲がるので $d=x_1-x_2>0$。円の幾何から $L^2+(\rho-d)^2=\rho^2$、すなわち $\rho=(L^2+d^2)/(2d)$。小偏向 $d\ll L$ では

$$
\boxed{\rho\simeq\frac{L^2}{2(x_1-x_2)},\qquad
p\simeq\frac{eBL^2}{2(x_1-x_2)}.}
$$

(3) 独立な位置誤差から $\sigma_d^2=2\sigma_x^2$。$p\propto d^{-1}$ より

$$
\boxed{\frac{\sigma_p}{p}\simeq\frac{\sqrt2\sigma_x}{|x_1-x_2|}.}
$$

この一次の誤差伝播には $\sigma_x\ll|x_1-x_2|$ を要する。

## **Reference**

- [京都大学公式原題（2019年度、PDF 13–14ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
