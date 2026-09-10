---
sidebar_label: '2016年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Geometry.Gaussian-Curvature-of-Ruled-Surface
  - Mathematics.Vector-Calculus.Parametric-Surface
---

# 東京大学 工学系研究科 2016年8月実施 数学 第4問

## **Author**
祭音Myyura

## **Description**

出典：[公式2017年度数学試験](https://www.t.u-tokyo.ac.jp/hubfs/pdf/H29_suugaku_J.pdf)、第4問。

$0 \leq \theta < 2\pi ,0 \leq \alpha \leq \pi$ 範囲にある実数 $\theta$, $\alpha$ に対して, 3 次元直交座標系 $xyz$ における点 $P(\cos\theta,\sin\theta,1)$ と点 $Q(\cos(\theta + \alpha),\sin(\theta + \alpha),-1)$ の 2 点を通る直線 $L$ を考える。

### I.
直線 $L$ を,　媒介変数 $t$ の一次式として表せ。ただし, $t = 0$ の時に点 $Q$ を,　$t = 1$ の時に点 $P$ を表すように定めよ。

### II.
$\theta$ を $0 \leq \theta < 2\pi$ の範囲で変化させたときに直線 $L$ が描く曲面 $S$ を $x,y,z$ の方程式として求めよ。また, 曲面 $S$と平面 $y=0$ の交線を $C$ とする。$C$ を $x,z$ の方程式として求め, その概形を図示せよ。

次に, 曲面 $S$ のガウス曲率を考える。一般に曲面上の点 $R$ の位置ベクトル $r$ が媒介変数 $u,v$ を用いて,

$$
\begin{align}
r(u,v) = (x(u,v),y(u,v),z(u,v))
\end{align}
$$

で与えられるとき,　ガウス曲率 $K$ は次式のように表される。

$$
\begin{align}
K = \frac{(r_{uu}\cdot e)(r_{vv}\cdot e) - (r_{uv} \cdot e)^2}{(r_{u}\cdot r_{u})(r_{v}\cdot r_{v})- (r_{u} \cdot r_{v})^2}
\end{align}
$$

ここで, $r_{u},r_{v}$と$r_{uu},r_{uv},r_{vv}$ は媒介変数 $u,v$ に関する $r(u,v)$ の一階偏微分,　二階偏微分を表している。また, $\big( a \cdot b \big)$ は 3 次元ベクトル $a,b$ の内積, $e$ は点 $R$ における法線方向の単位ベクトルを表している。

### III.
曲面 $S$ と $x$ 軸の交点のうち領域 $x>0$ にあるものを点 $W$ とする。$0 \leq \alpha < \pi$ を満たす $\alpha$ に対し,　点 $W$ における曲面 $S$ のガウス曲率を計算せよ。


### IV.
$0 \leq \alpha < \pi$ を満たす $\alpha$ に対し,　曲面 $S$ の任意の点においてガウス曲率が $0$ 以下であることを示せ。

#### 题目描述

对 $0\le\theta<2\pi$、$0\le\alpha\le\pi$，在三维直角坐标系中取

$$
P=(\cos\theta,\sin\theta,1),\qquad
Q=(\cos(\theta+\alpha),\sin(\theta+\alpha),-1),
$$

并令直线 $L$ 经过 $P,Q$。

1. 用参数 $t$ 的一次式表示 $L$，要求 $t=0$ 对应 $Q$、$t=1$ 对应 $P$。
2. 固定 $\alpha$、令 $\theta$ 遍历 $[0,2\pi)$，求这些直线扫成的曲面 $S$ 的 $x,y,z$ 方程。再求 $S$ 与平面 $y=0$ 的交线 $C$ 在 $x,z$ 平面中的方程，并画出概形。
3. 采用题中给出的参数曲面高斯曲率公式。对 $0\le\alpha<\pi$，取 $S$ 与正 $x$ 轴的交点 $W$，计算 $W$ 处的高斯曲率。
4. 对 $0\le\alpha<\pi$，证明曲面 $S$ 任意点处的高斯曲率均不大于 $0$。

## **Kai**

### I

$\boldsymbol r=(1-t)Q+tP$ より、

$$
\boxed{\begin{aligned}
x&=(1-t)\cos(\theta+\alpha)+t\cos\theta,\\
y&=(1-t)\sin(\theta+\alpha)+t\sin\theta,\\
z&=2t-1,\qquad t\in\mathbb R.
\end{aligned}}
$$

### II

$x^2+y^2=(1-t)^2+t^2+2t(1-t)\cos\alpha$ に $t=(z+1)/2$ を代入すると、

$$
\boxed{S:\ x^2+y^2-\sin^2\frac\alpha2\,z^2=\cos^2\frac\alpha2.}
$$

固定した $t$ で $\theta$ を一周させると対応する円周全体が得られるため、これは求める曲面そのものである。$y=0$ とおいて

$$
\boxed{C:\ x^2-\sin^2\frac\alpha2\,z^2=\cos^2\frac\alpha2.}
$$

$\alpha=0$ では $x=\pm1$、$0<\alpha<\pi$ では頂点 $(x,z)=(\pm\cos(\alpha/2),0)$、漸近線 $z=\pm x/\sin(\alpha/2)$ を持つ双曲線、$\alpha=\pi$ では $z=\pm x$ となる。

![三つの場合の断面C](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/tokyo-kyotsu-201608-sections.svg)

### III

$a=\cos(\alpha/2)>0,b=\sin(\alpha/2)$ とおくと $W=(a,0,0)$。曲面の方程式より単位法線は $\boldsymbol e=(1,0,0)$ と取れる。

$W$ に対応するパラメータは $t=1/2,\theta=-\alpha/2\pmod{2\pi}$ であり、そこで

$$
\boldsymbol r_\theta=(0,a,0),\qquad
\boldsymbol r_t=(0,-2b,2),\qquad
\boldsymbol r_{\theta t}\cdot\boldsymbol e=2b,\qquad
\boldsymbol r_{tt}=0.
$$

したがって曲率公式から

$$
\boxed{K(W)=\frac{-4b^2}{a^2(4b^2+4)-4a^2b^2}
=-\frac{b^2}{a^2}=-\tan^2\frac\alpha2.}
$$

### IV

すべての点で $\boldsymbol r_{tt}=0$ なので、曲率公式の分子は $-(\boldsymbol r_{\theta t}\cdot\boldsymbol e)^2\le0$。一方、分母は

$$
\begin{aligned}
D&=(\boldsymbol r_\theta\cdot\boldsymbol r_\theta)
(\boldsymbol r_t\cdot\boldsymbol r_t)-(\boldsymbol r_\theta\cdot\boldsymbol r_t)^2\\
&=(6-2\cos\alpha)(2-2\cos\alpha)(t-1/2)^2+2(1+\cos\alpha)>0
\end{aligned}
$$

である（$0\le\alpha<\pi$）。よって $\boxed{K\le0}$。
