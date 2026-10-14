---
sidebar_label: "2020年度 II-2（量子力学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Time-Dependent-Harmonic-Oscillator
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.Canonical-Commutation-Relations
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2020年度 問題II-2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m>0$、角振動数 $\omega>0$ の一次元調和振動子をハイゼンベルク描像で扱う。$[\hat q,\hat p]=i\hbar$、$\hat H=\hat p^2/(2m)+m\omega^2\hat q^2/2$ とする。複素共役を $*$、エルミート共役を $\dagger$、時間微分を点で表す。

1. $\omega$ 一定のとき、$\hat a=\sqrt{m\omega/(2\hbar)}(\hat q+i\hat p/(m\omega))e^{i\omega t}$ とおく。$[\hat a,\hat a^\dagger]$ を求め、$\hat H$ を $\hat N=\hat a^\dagger\hat a$ で表せ。
2. $\dot{\hat O}=\partial_t\hat O+(i/\hbar)[\hat H,\hat O]$ により $\dot{\hat a}$ を求めよ。

以後 $\omega=\omega(t)$ とする。

3. $\ddot u+\omega^2u=0$ を満たす複素関数が $t=0$ で $u\dot u^*-u^*\dot u=i\hbar/m$ を満たすとき、この条件が全時刻で成り立つことを示せ。
4. $\hat q=\hat bu+\hat b^\dagger u^*$、$\hat p=m(\hat b\dot u+\hat b^\dagger\dot u^*)$ と表したとき、$[\hat b,\hat b^\dagger]$ と $\dot{\hat b}$ を求めよ。
5. $\omega(t)\to\omega_\mp$ ($t\to\mp\infty$) とする。上の微分方程式と規格化条件を満たし、$u_1\to\mathcal N e^{-i\omega_-t}$ ($t\to-\infty$)、$u_2\to\mathcal M e^{-i\omega_+t}$ ($t\to+\infty$) となる解の $|\mathcal N|,|\mathcal M|$ を求めよ。
6. $u_1\to\alpha\mathcal M e^{-i\omega_+t}+\beta\mathcal M^*e^{i\omega_+t}$、$u_2\to\gamma\mathcal N e^{-i\omega_-t}+\delta\mathcal N^*e^{i\omega_-t}$ とする。解の一意性から $\gamma=\alpha^*,\delta=-\beta$ が成立する。$|\alpha|$ を $\beta$ で表せ。
7. $u_1,u_2$ に対応する演算子について $\hat b_2=\alpha\hat b_1+\beta^*\hat b_1^\dagger$ が成立する。$\hat b_1|\mathrm{in}\rangle=0$ で定まる規格化状態の $\hat N_2=\hat b_2^\dagger\hat b_2$ の期待値を求めよ。

#### 题目描述

在海森堡绘景中研究质量 $m$、随时间变化的频率 $\omega(t)$ 的一维谐振子，正则对易关系和哈密顿量如上。

1. 频率恒定时，求给定 $\hat a$ 的对易关系，并用数算符表示哈密顿量。
2. 求其总时间导数。
3. 证明经典模函数 $u$ 的 Wronskian 归一化守恒。
4. 以模函数展开位置和动量，求展开算符的对易关系和时间导数。
5. 频率在正负无穷趋于常数，求纯正频模的归一化常数。
6. 求 Bogoliubov 系数满足的模长关系。
7. 求初始真空中的末态粒子数期望。

## **Kai**

### (1)・(2)

位相因子は交換関係で相殺され、$[\hat q,\hat p]=i\hbar$ から

$$
\boxed{[\hat a,\hat a^\dagger]=1,\qquad
\hat H=\hbar\omega(\hat N+\tfrac12).}
$$

$[\hat N,\hat a]=-\hat a$ より、陽な時間微分 $i\omega\hat a$ と交換子の項が相殺し、$\boxed{\dot{\hat a}=0}$。

### (3)・(4)

(3) $W=u\dot u^*-u^*\dot u$ とおけば

$$
\dot W=u\ddot u^*-u^*\ddot u=-\omega^2uu^*+\omega^2u^*u=0.
$$

従って初期の $W=i\hbar/m$ が保存される。

(4) 展開を正準交換関係へ代入すると $[\hat q,\hat p]=mW[\hat b,\hat b^\dagger]$。従って $\boxed{[\hat b,\hat b^\dagger]=1}$。また $\dot{\hat q}=\hat p/m$ と $\dot{\hat p}=-m\omega^2\hat q$ から

$$
u\dot{\hat b}+u^*\dot{\hat b}^\dagger=0,\qquad
\dot u\dot{\hat b}+\dot u^*\dot{\hat b}^\dagger=0.
$$

係数行列の行列式は $W\neq0$ なので $\boxed{\dot{\hat b}=0}$。

### (5)・(6)

(5) $u=Ce^{-i\omega t}$ に対して $W=2i\omega|C|^2$。よって

$$
\boxed{|\mathcal N|=\sqrt{\frac\hbar{2m\omega_-}},\qquad
|\mathcal M|=\sqrt{\frac\hbar{2m\omega_+}}.}
$$

(6) $u_1=\alpha u_2+\beta u_2^*$ の Wronskian は $(|\alpha|^2-|\beta|^2)i\hbar/m$ となる。両方の規格化を比較して

$$
\boxed{|\alpha|^2-|\beta|^2=1,\qquad |\alpha|=\sqrt{1+|\beta|^2}.}
$$

### (7)

$\hat b_1|\mathrm{in}\rangle=0$ と $[\hat b_1,\hat b_1^\dagger]=1$ から

$$
\boxed{\langle\mathrm{in}|\hat N_2|\mathrm{in}\rangle
=|\beta|^2\langle\mathrm{in}|\hat b_1\hat b_1^\dagger|\mathrm{in}\rangle
=|\beta|^2.}
$$

## **Reference**

- [京都大学公式原題（2020年度、PDF 11–12ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R2.pdf)
