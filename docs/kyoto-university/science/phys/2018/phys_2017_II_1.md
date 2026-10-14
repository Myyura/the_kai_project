---
sidebar_label: "2018年度 II-1（量子力学）"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.WKB-Approximation
  - Physics.Quantum-Mechanics.Harmonic-Oscillator-Ground-State
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2018年度 問題II-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

一次元ハミルトニアン

$$
H=\frac{p^2}{2m}+V(x),\qquad V(x)=\frac{m\omega^2}{2}x^2(1-gx)^2
$$

を考える。$g>0$、$m>0$ で、$x=0,g^{-1}$ に二つの井戸がある。基底エネルギーは障壁の高さより十分低いものとし、$g$ に対する摂動論的補正を捨て、トンネル効果による補正を

$$
E=\hbar\omega(\nu+1/2)
$$

で表す。

1. $|x|\ll g^{-1}$ の領域 I では $V(x)\simeq m\omega^2x^2/2$。この領域で、$x\to-\infty$ で零に収束するシュレディンガー方程式の解を求めよ。規格化定数を $A$ とし、特殊関数

   $$
   D_\lambda''(z)+\left(\lambda+\frac12-\frac{z^2}{4}\right)D_\lambda(z)=0
   $$

   を用いよ。$z\gg1$、$\lambda$ が非負整数でない場合の漸近形として、原問では

   $$
   D_\lambda(z)\simeq z^\lambda e^{-z^2/4},\qquad
   D_\lambda(-z)\simeq(-z)^\lambda e^{-z^2/4}
   +\frac{\sqrt{2\pi}}{\Gamma(-\lambda)}z^{-\lambda-1}e^{z^2/4}
   $$

   が与えられている。

障壁内の領域 II では $k(x)=\sqrt{2m(V(x)-E)}$ とし、

$$
\psi\simeq\frac{C_1}{\sqrt{k(x)}}\exp\!\left(\frac1\hbar\int_a^xk(y)dy\right)
+\frac{C_2}{\sqrt{k(x)}}\exp\!\left(-\frac1\hbar\int_a^xk(y)dy\right).
$$

ここで $a$ は左井戸と障壁の間の転回点 $V(a)=E$、$b=g^{-1}-a$ は右側の転回点であり、基底状態の対称性より

$$
\frac{C_1}{C_2}=\exp\!\left(-\frac1\hbar\int_a^bk(y)dy\right)
$$

である。

2. $a\ll x\ll(a^2/g)^{1/3}$ において

   $$
   \psi\simeq B_1x^{\gamma_1}e^{m\omega x^2/(2\hbar)}+B_2x^{\gamma_2}e^{-m\omega x^2/(2\hbar)}
   $$

   と書いたとき、$B_i,\gamma_i$ を $C_i,E$ で表せ。$a\simeq\sqrt{2E/(m\omega^2)}$、$\int_a^xk(y)dy\simeq\int_a^x[m\omega y-E/(\omega y)]dy$ を用いてよい。
3. 領域 I と II の重なりで漸近形を接続し、$C_1/C_2$ を $\nu$ で表せ。
4. $s=g^2\hbar/(m\omega)\ll1$ のとき $\nu$ を求めよ。$\Gamma(-\nu)\simeq-1/\nu$ および

   $$
   \exp\!\left(-\frac1\hbar\int_a^bk(y)dy\right)
   \simeq e^{-1/(6s)}e^{2E/(\hbar\omega)}s^{-E/(\hbar\omega)}
   \left(\frac{2E}{\hbar\omega}\right)^{-E/(\hbar\omega)}
   $$

   を用いてよい。

#### 题目描述

一维双阱势 $V(x)=m\omega^2x^2(1-gx)^2/2$ 在 $0$ 和 $g^{-1}$ 有极小值，$g>0$。基态能量远低于势垒，忽略关于 $g$ 的微扰修正，只求隧穿修正 $E=\hbar\omega(\nu+1/2)$。

1. 在左井附近用谐振子势近似，借助题给的抛物柱函数及其渐近式，求向负无穷衰减的波函数。
2. 在势垒内采用题给 WKB 表达式，转向点为 $a,b=g^{-1}-a$；基态对称性给出 $C_1/C_2=e^{-\int_a^b k/\hbar}$。在重叠区 $a\ll x\ll(a^2/g)^{1/3}$ 求增长项、衰减项的幂次与系数，可使用给定积分近似。
3. 接续两种渐近解，求系数比与 $\nu$ 的关系。
4. 在 $s=g^2\hbar/(m\omega)\ll1$ 时，使用题给的势垒积分与伽马函数近似求 $\nu$。

## **Kai**

### (1)

$z=\alpha x$、$\alpha=\sqrt{2m\omega/\hbar}$ とおくと

$$
\frac{d^2\psi}{dz^2}+\left(\nu+\frac12-\frac{z^2}{4}\right)\psi=0.
$$

$x\to-\infty$ で減衰する解を選び、

$$
\boxed{\psi_{\rm I}(x)=A D_\nu(-\alpha x).}
$$

### (2)

$q=E/(\hbar\omega)=\nu+1/2$ とおく。題意の積分近似から

$$
\frac1\hbar\int_a^xk(y)dy\simeq\frac{m\omega x^2}{2\hbar}-q-q\ln\frac xa,\qquad
k(x)\simeq m\omega x.
$$

したがって

$$
\boxed{\gamma_1=-q-\frac12=-\nu-1,\qquad
B_1=\frac{C_1}{\sqrt{m\omega}}e^{-q}a^q,}
$$

$$
\boxed{\gamma_2=q-\frac12=\nu,\qquad
B_2=\frac{C_2}{\sqrt{m\omega}}e^qa^{-q},\qquad
a\simeq\sqrt{\frac{2E}{m\omega^2}}.}
$$

### (3)

実波動関数を用いると、実軸上の $D_\nu(-z)$ の減衰項係数は $\cos\pi\nu$ となる。したがって成長・減衰項の係数比は

$$
\frac{B_1}{B_2}=\frac{\sqrt{2\pi}}{\Gamma(-\nu)\cos\pi\nu}\alpha^{-2q}.
$$

(2) の $B_1/B_2=(C_1/C_2)e^{-2q}a^{2q}$ と $\alpha a=2\sqrt q$ を用いれば

$$
\boxed{\frac{C_1}{C_2}=\frac{\sqrt{2\pi}}{\Gamma(-\nu)\cos\pi\nu}
\left[\frac{e^2}{4(\nu+1/2)}\right]^{\nu+1/2}.}
$$

題文の $(-z)^\nu$ という表記を形式的にそのまま使う場合には $\cos\pi\nu$ を $(-1)^\nu$ に置き換えた式となる。ここで必要な $\nu\to0$ の主要項ではいずれの係数も $1$ である。

### (4)

対称性による係数比と比較し、共通する $e^{2q}$ を消去すると

$$
\frac1{\Gamma(-\nu)\cos\pi\nu}
\simeq\frac1{\sqrt{2\pi}}\left(\frac2s\right)^q e^{-1/(6s)}.
$$

左辺は $-\nu+O(\nu^2)$、右辺の冪では $q\simeq1/2$ としてよい。ゆえに

$$
\boxed{\nu\simeq-\frac1{\sqrt{\pi s}}e^{-1/(6s)}
=-\sqrt{\frac{m\omega}{\pi g^2\hbar}}\exp\!\left[-\frac{m\omega}{6g^2\hbar}\right].}
$$

対称な基底状態はトンネル効果によってエネルギーが下がる。

## **Reference**

- [京都大学公式問題（2018年度、PDF 2–3ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H30-II.pdf)
