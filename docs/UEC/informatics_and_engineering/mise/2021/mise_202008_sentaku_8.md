---
sidebar_label: "2020年8月実施 選択問題8 応用数学"
tags:
  - University-of-Electro-Communications
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Residue-Theorem
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題8 応用数学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

複素変数を $z$、虚数単位を $i$ とする。

### 問1

次を計算し、実数 $a,b$ を用いて $a+ib$ の形で表せ。

$$
\text{(1) }\sin\left(\frac\pi2-i\right),\qquad
\text{(2) }\int_0^{1+i}z\,dz,\qquad
\text{(3) }\int_0^{\pi i}z\cos z^2\,dz.
$$

### 問2

コーシー・リーマンの方程式を満たす複素関数 $f(z,\bar z)$ に対して $\partial f/\partial\bar z=0$ を示せ。$\bar z$ は複素共役を表す。証明に必要な変数や関数は適宜定義せよ。

### 問3

$R>1$ とし、実軸上を $-R$ から $R$ へ進む経路 $C_1$ と、上半円 $z=Re^{i\theta}\ (0\le\theta\le\pi)$ を $R$ から $-R$ へ進む経路 $C_2$ による閉曲線 $C=C_1+C_2$ を考える。

1. 留数定理を用いて $\oint_C ze^{iz}/(z^2+1)\,dz$ を求めよ。
2. 次を示せ。ヒント：積分の絶対値は絶対値の積分以下である。

$$
\left|\int_{C_2}\frac{ze^{iz}}{z^2+1}\,dz\right|
\le\frac{R^2}{R^2-1}\int_0^\pi e^{-R\sin\theta}\,d\theta.
$$

3. 右辺を評価し、$R\to\infty$ のときの $C_2$ 上の積分の極限を求めよ。$0\le\theta\le\pi/2$ で $2\theta/\pi\le\sin\theta$ を用いてよい。
4. 次の広義積分を求めよ。

$$
\int_{-\infty}^\infty\frac{x\cos x}{x^2+1}\,dx,\qquad
\int_{-\infty}^\infty\frac{x\sin x}{x^2+1}\,dx.
$$

#### 题目描述

问1：把 $\sin(\pi/2-i)$、从0到 $1+i$ 的 $\int z\,dz$、从0到 $\pi i$ 的 $\int z\cos z^2\,dz$ 写成实部加虚部形式。问2：由柯西–黎曼方程证明 $\partial f/\partial\bar z=0$。问3：在半径 $R>1$ 的上半圆及实轴直径组成的正向围道上，用留数定理积分 $ze^{iz}/(z^2+1)$；推导题给弧积分上界，并用 $\sin\theta\ge2\theta/\pi$ 证明弧积分趋0，最后求实轴上 $x\cos x/(x^2+1)$ 和 $x\sin x/(x^2+1)$ 的广义积分。

## **Kai**

### 問1

$$
\boxed{\sin\left(\frac\pi2-i\right)=\cos i=\frac{e+e^{-1}}2+0i}.
$$

被積分関数はいずれも整関数で、原始関数が存在するから経路には依存しない。

$$
\boxed{\int_0^{1+i}z\,dz=\left[\frac{z^2}2\right]_0^{1+i}=0+i},
$$

$$
\boxed{\int_0^{\pi i}z\cos z^2\,dz
=\left[\frac12\sin z^2\right]_0^{\pi i}
=-\frac12\sin\pi^2+0i}.
$$

### 問2

$z=x+iy,\ f=u(x,y)+iv(x,y)$ とする。Wirtinger微分を $\partial_{\bar z}=\tfrac12(\partial_x+i\partial_y)$ と定義すると

$$
\frac{\partial f}{\partial\bar z}
=\frac12[(u_x-v_y)+i(v_x+u_y)].
$$

コーシー・リーマンの方程式 $u_x=v_y,u_y=-v_x$ を代入すれば、実部・虚部とも0となり、$\boxed{\partial f/\partial\bar z=0}$ が得られる。

### 問3 (1)

閉曲線内の極は $z=i$ のみ。その留数は

$$
\operatorname{Res}_{z=i}\frac{ze^{iz}}{(z-i)(z+i)}
=\frac{ie^{-1}}{2i}=\frac1{2e}.
$$

したがって $\boxed{\oint_C ze^{iz}/(z^2+1)\,dz=\pi i/e}$。

### 問3 (2), (3)

弧上では $|z|=R,|dz|=R\,d\theta$、$|e^{iz}|=e^{-R\sin\theta}$、$|z^2+1|\ge R^2-1$ なので、

$$
\left|\int_{C_2}\frac{ze^{iz}}{z^2+1}\,dz\right|
\le\frac{R^2}{R^2-1}\int_0^\pi e^{-R\sin\theta}d\theta.
$$

$\sin\theta$ の対称性とヒントを用いて

$$
\int_0^\pi e^{-R\sin\theta}d\theta
=2\int_0^{\pi/2}e^{-R\sin\theta}d\theta
\le2\int_0^{\pi/2}e^{-2R\theta/\pi}d\theta
=\frac\pi R(1-e^{-R}).
$$

よって弧積分の絶対値は $\pi R(1-e^{-R})/(R^2-1)\to0$ で抑えられ、$\boxed{\lim_{R\to\infty}\int_{C_2}ze^{iz}/(z^2+1)\,dz=0}$。

### 問3 (4)

実軸上の積分は $\int_{-\infty}^\infty xe^{ix}/(x^2+1)\,dx=\pi i/e$。実部と虚部を比較して

$$
\boxed{\int_{-\infty}^\infty\frac{x\cos x}{x^2+1}\,dx=0},\qquad
\boxed{\int_{-\infty}^\infty\frac{x\sin x}{x^2+1}\,dx=\frac\pi e}.
$$

単なる対称主値だけでなく通常の広義積分としても、左右各半直線でDirichletの判定法により収束する。絶対収束ではない。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 15ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
