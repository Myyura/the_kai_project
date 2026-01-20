---
sidebar_label: "2019年8月実施 ベクトル解析"
tags:
  - Kyushu-University
  - Vector-Calculus
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年8月実施 ベクトル解析

## **Author**
Yu

## **Description**
直交座標系において,$x,y,z$ 軸方向の単位ベクトルをそれぞれ $\mathbf{i},\mathbf{j},\mathbf{k}$ とする。次の各問に答えよ。

(1) 面 $z = x^2 + y^2$ と面 $z = \big(x - \frac{1}{\sqrt{2}}\big)^2 + \big(y - \frac{1}{\sqrt{2}}\big)^2$ について, 次の問いに答えよ。

$\quad$ (a) 点 $P\big(\frac{\sqrt{2}}{4},\frac{\sqrt{2}}{4},\frac{1}{4}\big)$ が, いずれの面にも含まれることを示せ。

$\quad$ (b) 点 $P$ において, それぞれの面の法線のなす角を求めよ。

(2)ベクトル場 $\mathbf{A}$ を $\mathbf{A} = x^2\mathbf{i} - y^2\mathbf{j} + z^2\mathbf{k}$ とする。$S$ を $x^2 + y^2 = 9,z = 0,z = 4$ で囲まれた円筒の表面とするとき, 面積分

$$
\int \int_{S} \mathbf{A} \cdot \mathbf{n} dS
$$

を求めよ (ただし, $\mathbf{n}$ は $S$ の外向き単位法線ベクトル) 。

## **Kai**
### (1)
#### (a)

$$
z = x^2 + y^2 = \big(\frac{\sqrt{2}}{4}\big)^2 + \frac{\sqrt{2}}{4}\big)^2 = \frac{1}{4}
$$

$$
z = \big(\frac{\sqrt{2}}{4} - \frac{1}{\sqrt{2}}\big)^2 + \big(\frac{\sqrt{2}}{4} - \frac{1}{\sqrt{2}}\big)^2 = \frac{1}{4}
$$

#### (b)

$$
\begin{aligned}
\mathbf{N}_1 = \frac{\partial \mathbf{r}_1}{\partial x} \times \frac{\partial \mathbf{r}_1}{\partial y} = \langle -2x,&-2y,1 \rangle = \langle -\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2},1 \rangle \\
\mathbf{N}_2 = \frac{\partial \mathbf{r}_2}{\partial x} \times \frac{\partial \mathbf{r}_2}{\partial y} = \langle -2(x - \frac{1}{\sqrt{2}}),&-2(y - \frac{1}{\sqrt{2}}),1 \rangle = \langle \frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2},1 \rangle \\
\cos\theta = \frac{\mathbf{N}_1 \cdot \mathbf{N}_2}{|\mathbf{N}_1||\mathbf{N}_2|} &= 0 \Rightarrow \theta = \frac{\pi}{2}
\end{aligned} 
$$

### (2)

$$
\nabla \cdot \mathbf{A} = \frac{\partial}{\partial x}(x^2) + \frac{\partial}{\partial y}(-y^2) + \frac{\partial}{\partial z}(z^2) = 2x - 2y + 2z
$$

$$
\oint_\mathbf{A} \cdot \mathbf{n}dS = \int_{V} \nabla \cdot \mathbf{A}dV = \int_0^{2\pi} \int_0^3 \int_0^4 2(r\cos\theta - r\sin\theta + z)rdzdrd\theta = 144\pi
$$