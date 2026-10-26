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

複素数の変数を $z$，虚数単位を $i$ で記す。つぎの問いに答えよ。

### 問1

つぎの小問を計算し，それぞれ，複素数 $a+ib$ で表わせ。ここで，$a,b$ は，実数とする。

(1) $\displaystyle\sin\left(\frac\pi2-i\right)$

(2) $\displaystyle\int_0^{1+i}z\,dz$

(3) $\displaystyle\int_0^{\pi i}z\cos z^2\,dz$

### 問2

コーシー・リーマンの方程式を満たす複素関数 $f(z,\bar z)$ に対し，次式が成り立つことを示せ。

$$
\frac{\partial f(z,\bar z)}{\partial\bar z}=0.
$$

ただし，$\bar z$ は，$z$ の複素共役とする。証明に必要な変数や関数は，適宜定義して良い。

### 問3

$\displaystyle\int_{-\infty}^{\infty}\frac{x\cos x}{x^2+1}\,dx$ および $\displaystyle\int_{-\infty}^{\infty}\frac{x\sin x}{x^2+1}\,dx$ の値を，線積分 $\displaystyle\oint_C\frac{ze^{iz}}{z^2+1}\,dz$ から導出せよ。ただし，経路 $C$ を図1で定める経路 $C=C_1+C_2$ として，以下の小問に解答し，導出すること。

(1) 留数定理を用い，$\displaystyle\oint_C\frac{ze^{iz}}{z^2+1}\,dz$ の値を求めよ。

(2) 極座標 $z=Re^{i\theta}$（$R>1,0\le\theta\le\pi$）より，つぎの不等式を示せ。

$$
\left|\int_{C_2}\frac{ze^{iz}}{z^2+1}\,dz\right|
\le\frac{R^2}{R^2-1}\int_0^\pi e^{-R\sin\theta}\,d\theta.
$$

ヒント：$\displaystyle\left|\int_{C_2}f(z)\,dz\right|\le\int_{C_2}|f(z)|\,dz$ が成り立つ。

(3) (2)の不等式右辺を計算し，$\displaystyle\lim_{R\to\infty}\int_{C_2}\frac{ze^{iz}}{z^2+1}\,dz$ を求めよ。ヒント：$\dfrac2\pi\theta\le\sin\theta,\ 0\le\theta\le\dfrac\pi2$。

(4) $\displaystyle\int_{-\infty}^{\infty}\frac{x\cos x}{x^2+1}\,dx$ および $\displaystyle\int_{-\infty}^{\infty}\frac{x\sin x}{x^2+1}\,dx$ の値を求めよ。

![図1 積分路（R > 1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_8_fig1.png)

### 题目描述

用 $z$ 表示复变量，$i$ 表示虚数单位。回答下列问题。

#### 第1题

计算下列各式，并分别表示为复数 $a+ib$ 的形式，其中 $a,b$ 为实数。

(1) $\displaystyle\sin\left(\frac\pi2-i\right)$

(2) $\displaystyle\int_0^{1+i}z\,dz$

(3) $\displaystyle\int_0^{\pi i}z\cos z^2\,dz$

#### 第2题

对满足柯西–黎曼方程的复函数 $f(z,\bar z)$，证明

$$
\frac{\partial f(z,\bar z)}{\partial\bar z}=0.
$$

其中 $\bar z$ 为 $z$ 的共轭复数，可适当定义证明所需的变量与函数。

#### 第3题

从复线积分 $\displaystyle\oint_C\frac{ze^{iz}}{z^2+1}\,dz$ 推导 $\displaystyle\int_{-\infty}^{\infty}\frac{x\cos x}{x^2+1}\,dx$ 和 $\displaystyle\int_{-\infty}^{\infty}\frac{x\sin x}{x^2+1}\,dx$ 的值。路径 $C$ 为图1定义的 $C=C_1+C_2$，通过解答下列小问完成推导。

(1) 利用留数定理求 $\displaystyle\oint_C\frac{ze^{iz}}{z^2+1}\,dz$ 的值。

(2) 根据极坐标 $z=Re^{i\theta}$（$R>1,0\le\theta\le\pi$），证明

$$
\left|\int_{C_2}\frac{ze^{iz}}{z^2+1}\,dz\right|
\le\frac{R^2}{R^2-1}\int_0^\pi e^{-R\sin\theta}\,d\theta.
$$

提示：原题给出 $\displaystyle\left|\int_{C_2}f(z)\,dz\right|\le\int_{C_2}|f(z)|\,dz$。

(3) 计算第(2)问不等式的右侧，求 $\displaystyle\lim_{R\to\infty}\int_{C_2}\frac{ze^{iz}}{z^2+1}\,dz$。提示：$\dfrac2\pi\theta\le\sin\theta,\ 0\le\theta\le\dfrac\pi2$。

(4) 求 $\displaystyle\int_{-\infty}^{\infty}\frac{x\cos x}{x^2+1}\,dx$ 和 $\displaystyle\int_{-\infty}^{\infty}\frac{x\sin x}{x^2+1}\,dx$ 的值。

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
\boxed{\begin{gathered}
\int_0^{\pi i}z\cos z^2\,dz
=\left[\frac12\sin z^2\right]_0^{\pi i}\\
=-\frac12\sin\pi^2+0i
\end{gathered}}.
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

原題のヒントの右辺は $dz$ と印刷されているが，絶対値の評価では弧長要素 $|dz|$ を用いる。

弧上では $|z|=R,|dz|=R\,d\theta$、$|e^{iz}|=e^{-R\sin\theta}$、$|z^2+1|\ge R^2-1$ なので、

$$
\left|\int_{C_2}\frac{ze^{iz}}{z^2+1}\,dz\right|
\le\frac{R^2}{R^2-1}\int_0^\pi e^{-R\sin\theta}d\theta.
$$

$\sin\theta$ の対称性とヒントを用いて

$$
\begin{aligned}
\int_0^\pi e^{-R\sin\theta}\,d\theta
&=2\int_0^{\pi/2}e^{-R\sin\theta}\,d\theta\\
&\le2\int_0^{\pi/2}e^{-2R\theta/\pi}\,d\theta\\
&=\frac\pi R(1-e^{-R}).
\end{aligned}
$$

よって弧積分の絶対値は $\pi R(1-e^{-R})/(R^2-1)\to0$ で抑えられ、$\boxed{\lim_{R\to\infty}\int_{C_2}ze^{iz}/(z^2+1)\,dz=0}$。

### 問3 (4)

実軸上の積分は $\int_{-\infty}^\infty xe^{ix}/(x^2+1)\,dx=\pi i/e$。実部と虚部を比較して

$$
\boxed{\int_{-\infty}^\infty\frac{x\cos x}{x^2+1}\,dx=0}.
$$

$$
\boxed{\int_{-\infty}^\infty\frac{x\sin x}{x^2+1}\,dx=\frac\pi e}.
$$

単なる対称主値だけでなく通常の広義積分としても、左右各半直線でDirichletの判定法により収束する。絶対収束ではない。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 15ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
