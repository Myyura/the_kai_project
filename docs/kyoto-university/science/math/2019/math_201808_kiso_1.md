---
sidebar_label: "2019年度 基礎科目 問題1"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Gaussian-Integral
---

# 京都大学 理学研究科 数学・数理解析専攻 2019年度 基礎科目 問題1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\alpha$ は $0<\alpha\le\pi/2$ を満たす定数とする。このとき広義積分

$$
\iint_D e^{-(x^2+2xy\cos\alpha+y^2)}\,dx\,dy
$$

を計算せよ。ただし、$D=\{(x,y)\in\mathbb R^2\mid x\ge0,\ y\ge0\}$ とする。

#### 题目描述

设常数 $0<\alpha\le\pi/2$，$D=\{(x,y)\in\mathbb R^2\mid x\ge0,\ y\ge0\}$。计算反常二重积分

$$
\iint_D e^{-(x^2+2xy\cos\alpha+y^2)}\,dx\,dy.
$$

## **Kai**

$u=x+y\cos\alpha$、$v=y\sin\alpha$ と置くと、

$$
x^2+2xy\cos\alpha+y^2=u^2+v^2,
\qquad dx\,dy=\frac{du\,dv}{\sin\alpha}.
$$

$x\ge0,y\ge0$ の像は、正の $u$ 軸と方向ベクトル $(\cos\alpha,\sin\alpha)$ の半直線に挟まれた角 $\alpha$ の扇形である。したがって $u=r\cos\theta,v=r\sin\theta$ と置けば、

$$
\begin{aligned}
\iint_D e^{-(x^2+2xy\cos\alpha+y^2)}\,dx\,dy
&=\frac1{\sin\alpha}\int_0^\alpha\int_0^\infty e^{-r^2}r\,dr\,d\theta\\
&=\boxed{\frac{\alpha}{2\sin\alpha}}.
\end{aligned}
$$

## **Reference**

- [京都大学公式問題（2019年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_kiso.pdf)
- [照合用参考解答（H31-basic.pdf、PDF 1ページ）](https://drive.google.com/file/d/1IriDJsz9XGidy2KdL3U1GBksFntQzNIh/view)
