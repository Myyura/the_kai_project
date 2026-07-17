---
sidebar_label: '2025年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Vector-Calculus.Parametric-Surface
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Geometry.Gaussian-Curvature
---

# 東京大学 工学系研究科 2025年8月実施 数学 第4問

## **Author**
GPT-5.6 Sol

## **Description**

3 次元直交座標系で、曲線

$$
L(u)=\frac{e^u+e^{-u}}2\,\boldsymbol i+u\,\boldsymbol k,
\qquad -2\le u\le2
$$

を考える。また、これを $z$ 軸の周りに回転して得られる曲面を

$$
S(u,v)=\frac{e^u+e^{-u}}2\cos v\,\boldsymbol i
+\frac{e^u+e^{-u}}2\sin v\,\boldsymbol j
+u\,\boldsymbol k,
$$

$$
-2\le u\le2,\qquad0\le v\le2\pi
$$

とする。

1. 曲線 $L$ の長さを求めよ。
2. 曲面 $S$ の面積を求めよ。
3. 点
   $$
   P=\left(\frac{e+e^{-1}}{2\sqrt2},
   \frac{e+e^{-1}}{2\sqrt2},1\right)
   $$
   における接平面を求めよ。
4. 点 $P$ における曲面 $S$ の Gaussian curvature を求めよ。

## **Kai**

以下では

$$
\cosh u=\frac{e^u+e^{-u}}2
$$

を用いる。

### I

$$
L(u)=(\cosh u,0,u)
$$

なので、

$$
L'(u)=(\sinh u,0,1),
\qquad
\|L'(u)\|=\sqrt{\sinh^2u+1}=\cosh u.
$$

よって曲線の長さは

$$
\boxed{
\int_{-2}^{2}\cosh u\,du
=2\sinh2=e^2-e^{-2}
}
$$

である。

### II

$$
S(u,v)=(\cosh u\cos v,\cosh u\sin v,u)
$$

より、

$$
\begin{aligned}
S_u&=(\sinh u\cos v,\sinh u\sin v,1),\\
S_v&=(-\cosh u\sin v,\cosh u\cos v,0).
\end{aligned}
$$

したがって、

$$
\|S_u\times S_v\|=\cosh^2u.
$$

曲面積は

$$
\begin{aligned}
\int_{-2}^{2}\int_0^{2\pi}\cosh^2u\,dv\,du
&=2\pi\int_{-2}^{2}\frac{1+\cosh2u}{2}\,du\\
&=\boxed{4\pi+\pi\sinh4}.
\end{aligned}
$$

### III

点 $P$ は $u=1,v=\pi/4$ に対応する。曲面は暗黙的に

$$
F(x,y,z)=\sqrt{x^2+y^2}-\cosh z=0
$$

と表せる。$P$ における法線ベクトルとして

$$
\nabla F(P)=\left(\frac1{\sqrt2},\frac1{\sqrt2},-\sinh1\right)
$$

を取れるので、接平面は

$$
\frac{x+y}{\sqrt2}-\sinh1\,z-e^{-1}=0.
$$

したがって、例えば

$$
\boxed{x+y-\sqrt2\sinh1\,z=\sqrt2e^{-1}}
$$

と書ける。

### IV

第一基本量は

$$
E=S_u\cdot S_u=\cosh^2u,\qquad
F=S_u\cdot S_v=0,\qquad
G=S_v\cdot S_v=\cosh^2u.
$$

単位法線ベクトルを

$$
\boldsymbol n=\left(-\frac{\cos v}{\cosh u},
-\frac{\sin v}{\cosh u},\tanh u\right)
$$

と選ぶと、第二基本量の係数は

$$
e=S_{uu}\cdot\boldsymbol n=-1,\qquad
f=S_{uv}\cdot\boldsymbol n=0,\qquad
g=S_{vv}\cdot\boldsymbol n=1.
$$

ゆえに Gaussian curvature は

$$
K=\frac{eg-f^2}{EG-F^2}
=-\frac1{\cosh^4u}.
$$

$P$ では $u=1$ なので、

$$
\boxed{K(P)=-\frac1{\cosh^4 1}}
$$

である。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 数学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/M_J_E_2026.pdf)
