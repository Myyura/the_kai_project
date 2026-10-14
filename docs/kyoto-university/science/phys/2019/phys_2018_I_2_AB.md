---
sidebar_label: "2019年度 I-2-AB（力学・量子力学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.First-Order-Perturbation-of-Displaced-Oscillator
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年度 問題I-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-2A

質量 $M_s$ の太陽の周りを $M_p\ll M_s$ の惑星が公転する。太陽を固定し、極座標 $(r,\theta)$ を用いる。加速度は

$$
a_r=\ddot r-r\dot\theta^2,\qquad a_\theta=\frac1r\frac d{dt}(r^2\dot\theta).
$$

ケプラーの第2法則により面積速度 $r^2\dot\theta/2$ は一定である。第1法則による楕円の長半径を $a$、離心率を $\epsilon$、周期を $T$ とし、面積は $\pi a^2\sqrt{1-\epsilon^2}$、軌道は $r=a(1-\epsilon^2)/(1+\epsilon\cos\theta)$ とする。

1. 面積速度と $\dot\theta$ を求めよ。
2. $\dot r=A\,d(1/r)/d\theta$、$\ddot r=B\,d^2(1/r)/d\theta^2$ の $A,B$ を、$T$ を含む式で表せ。
3. $a_r=k_{sp}/r^2$ の係数 $k_{sp}$ を $a,T$ で表せ。
4. 第3法則から $k_{sp}$ は惑星に依存しない。太陽と惑星を入れ替えた $k_{ps}$ は太陽に依存しないと推論する。さらにどの原理を使えば $k_{sp}=-GM_s,k_{ps}=-GM_p$、すなわち万有引力の法則が得られるか説明せよ。

### I-2B

質量 $m$、角振動数 $\omega$ の一次元調和振動子について、$[\hat a,\hat a^\dagger]=1$、$|n\rangle=(\hat a^\dagger)^n|0\rangle/\sqrt{n!}$ とする。

1. $\hat x=\sqrt{\hbar/(2m\omega)}(\hat a+\hat a^\dagger)$ を用いて、$\langle n'|\hat x|n\rangle$ と $\langle n'|\hat x^2|n\rangle$ を求めよ。
2. $V_1=Ax,V_2=Bx^2,V_3=Cx^3,V_4=Dx^4$ の各摂動のうち、一次のエネルギー変化が生じるものを対称性から選び、その値を求めよ。
3. $V_1+V_2$ が加わった系のエネルギー固有値を厳密に求めよ。

#### 题目描述

A：把太阳固定在原点。已知极坐标加速度、开普勒面积定律，以及长半轴 $a$、离心率 $\epsilon$ 的椭圆面积和轨道方程。求 (1) 面积速度及角速度；(2) $\dot r=A(1/r)'$、$\ddot r=B(1/r)''$ 的系数；(3) 逆平方加速度的系数；(4) 从开普勒第三定律和相互作用推出万有引力时需要补充的原理。

B：对质量 $m$、角频率 $\omega$ 的一维谐振子，给定产生湮灭算符及数态。(1) 求位置及位置平方的数态矩阵元；(2) 判断 $Ax,Bx^2,Cx^3,Dx^4$ 中哪些给出非零一阶能量修正，并求修正；(3) 求加入 $Ax+Bx^2$ 后的精确能级。

## **Kai**

### I-2A

(1) 面積速度は $\pi a^2\sqrt{1-\epsilon^2}/T$。したがって、$h=2\pi a^2\sqrt{1-\epsilon^2}/T$ とおけば

$$
\boxed{\dot\theta=h/r^2.}
$$

(2) $u=1/r$ とすると $\dot r=-h u'$、$\ddot r=-h^2u^2u''$ だから

$$
\boxed{A=-\frac{2\pi a^2\sqrt{1-\epsilon^2}}T,\qquad
B=-\frac{4\pi^2a^4(1-\epsilon^2)}{T^2r^2}.}
$$

(3) $u''+u=1/[a(1-\epsilon^2)]$ より

$$
a_r=-\frac{h^2}{r^2}(u''+u)=-\frac{4\pi^2a^3}{T^2r^2},\qquad
\boxed{k_{sp}=-4\pi^2a^3/T^2.}
$$

(4) 作用・反作用の法則から両者が受ける力の大きさは等しく、$k_{sp}M_p=k_{ps}M_s$。よって $k_{sp}/M_s=k_{ps}/M_p$ はいずれの物体にも依存しない負の普遍定数 $-G$ である。

### I-2B

(1) $x_0=\sqrt{\hbar/(2m\omega)}$ とおく。$\hat a|n\rangle=\sqrt n|n-1\rangle$ より

$$
\boxed{\langle n'|\hat x|n\rangle=x_0\left(\sqrt n\,\delta_{n',n-1}+\sqrt{n+1}\,\delta_{n',n+1}\right),}
$$

$$
\boxed{\langle n'|\hat x^2|n\rangle=x_0^2\left[\sqrt{n(n-1)}\delta_{n',n-2}+(2n+1)\delta_{n',n}+\sqrt{(n+1)(n+2)}\delta_{n',n+2}\right].}
$$

(2) 無摂動固有状態は確定したパリティを持つので、奇関数 $V_1,V_3$ の期待値はゼロである。一方、$\langle x^4\rangle=\|x^2|n\rangle\|^2=3x_0^4(2n^2+2n+1)$ より

$$
\boxed{\Delta E_n^{(1)}[V_2]=\frac{B\hbar}{m\omega}(n+\tfrac12),\qquad
\Delta E_n^{(1)}[V_4]=\frac{3D\hbar^2}{4m^2\omega^2}(2n^2+2n+1).}
$$

(3) $m\omega^2+2B>0$ のとき、$\Omega=\sqrt{\omega^2+2B/m}$ とおけば

$$
\frac{m\omega^2}2x^2+Ax+Bx^2=
\frac{m\Omega^2}2\left(x+\frac{A}{m\Omega^2}\right)^2-\frac{A^2}{2m\Omega^2}.
$$

したがって

$$
\boxed{E_n=\hbar\Omega(n+\tfrac12)-\frac{A^2}{2(m\omega^2+2B)},\quad n=0,1,\ldots.}
$$

$m\omega^2+2B\leq0$ では閉じ込める調和ポテンシャルを失い、この離散束縛スペクトルは存在しない。

## **Reference**

- [京都大学公式原題（2019年度、PDF 4–5ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
