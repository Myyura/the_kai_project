---
sidebar_label: "2023年度 数理科学 II [3]"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$0<\alpha<1$ とする。$\varepsilon>0$ に対し $C_\pm(\varepsilon)=\{x\pm i\varepsilon\mid x\ge0\}$ とし、向きは実部が増加する方向とする。$\operatorname{Log}z=\log|z|+i\arg z$、$0\le\arg z<2\pi$ をとり、$z^{\alpha-1}=e^{(\alpha-1)\operatorname{Log}z}$ と定める。

(1) $f(z)=z^{\alpha-1}/(z+1)$、$I_\pm(\varepsilon)=\int_{C_\pm(\varepsilon)}f(z)\,dz$ とする。優収束定理を用いて

$$
\lim_{\varepsilon\to0}I_+(\varepsilon)=\int_0^\infty\frac{x^{\alpha-1}}{1+x}\,dx,\qquad
\lim_{\varepsilon\to0}I_-(\varepsilon)=e^{2\pi i(\alpha-1)}\int_0^\infty\frac{x^{\alpha-1}}{1+x}\,dx
$$

を示せ。

(2) 留数定理を用いて $\int_0^\infty x^{\alpha-1}/(1+x)\,dx$ を求めよ。

## **Kai**

### (1)
$x>0$ に対して、上側からの偏角は $0$、下側からは $2\pi$ に収束する。また $\alpha-1<0$ なので

$$
\left|\frac{(x\pm i\varepsilon)^{\alpha-1}}{1+x\pm i\varepsilon}\right|
\le\frac{x^{\alpha-1}}{1+x}.
$$

右辺は原点付近で $x^{\alpha-1}$、無限遠で $x^{\alpha-2}$ と比較でき、$0<\alpha<1$ により可積分。したがって優収束定理で二つの極限を得る。

### (2)
正の実軸を切断線とする鍵穴形の正向き閉曲線をとる。半径 $r$ の内円の寄与は $O(r^\alpha)$、半径 $R$ の外円の寄与は $O(R^{\alpha-1})$ なので、$r\downarrow0,R\uparrow\infty$ で消える。

内部の単純極 $z=-1$ の留数は $e^{i\pi(\alpha-1)}$。上側を $0\to\infty$、下側を $\infty\to0$ に進むので、$J$ を所定の実積分として

$$
(1-e^{2\pi i(\alpha-1)})J=2\pi i e^{i\pi(\alpha-1)}.
$$

整理して $\boxed{J=\pi/\sin(\pi\alpha)}$。
