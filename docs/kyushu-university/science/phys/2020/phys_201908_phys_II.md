---
sidebar_label: "2019年8月実施 物理学 [II]"
tags:
  - Kyushu-University
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Conducting-Sphere-in-Uniform-Electric-Field
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Surface-Current-Boundary-Condition
---
# 九州大学 理学府 物理学専攻 2019年8月実施 物理学 \[II\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

本文件原 Description 为空；现有解答的 B-II 也为空，因此只能恢复下列题意。

**A-I（电偶极子）**：真空中点电荷 $q$ 位于原点或距原点 $d$ 的 $z$ 轴上，以 $(r,\theta)$ 表示场点的球坐标。

1. 写出原点点电荷的电势 $\Phi_0$。
2. 写出位于 $z=d$ 处点电荷的电势 $\Phi_1$。
3. 在 $d/r$ 很小时展开到一阶，并由一对相反点电荷得到偶极矩 $p=qd$ 的电偶极电势。
4. 求偶极电场的径向分量 $E_r$。

**A-II（均匀电场中的导体球）**：半径为 $a$ 的接地或等势导体球置于沿 $z$ 方向、大小为 $E_0$ 的均匀电场中。

1. 求外加均匀场的电势 $\Phi_u$，取原点电势为零。
2. 将偶极电势叠加，并由 $r=a$ 为等势面确定感应偶极矩 $p$。
3. 求球面外侧径向电场及表面电荷密度 $\sigma(\theta)$。

**B-I（表面电流边界条件）**：界面 $z=0$ 上有沿 $y$ 方向的面电流密度 $j_y$，界面两侧磁场分别记为区域 I、II 的 $\mathbf H^I,\mathbf H^{II}$。用跨越界面的窄矩形安培回路证明切向磁场跳跃条件

$$
H_x^{II}(0^+)-H_x^I(0^-)=j_y
$$

（符号方向按原解答的回路约定）。

**B-II**：原题和解答均未保存在文件中，无法可靠恢复。

## **Kai**
### \[A-I\]
#### (1)

$$
  \begin{aligned}
  \Phi_0 = \frac{q}{4 \pi \varepsilon_0 r}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0
  \sqrt{r^2 \sin^2 \theta + (r \cos \theta - d)^2}}
  \\
  &= \frac{q}{4 \pi \varepsilon_0 \sqrt{r^2 - 2dr \cos \theta + d^2}}
  \end{aligned}
$$

#### (3)
(2) より、 $d/r$ の1次までで

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 - \frac{2d \cos \theta}{r} + \frac{d^2}{r^2} \right)^{-1/2}
  \\
  &\simeq \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 + \frac{d \cos \theta}{r} \right)
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \Phi_d
  &= \frac{qd \cos \theta}{4 \pi \varepsilon_0 r^2}
  \end{aligned}
$$

である。

#### (4)

$$
  \begin{aligned}
  E_r
  &= \left( - \boldsymbol{\nabla} \Phi_d \right) \cdot \boldsymbol{e}_r
  \\
  &= - \frac{\partial \Phi_d}{\partial r}
  \\
  &= \frac{p \cos \theta}{2 \pi \varepsilon_0 r^3}
  \end{aligned}
$$

### \[A-II\]
#### (1)
$\boldsymbol{\nabla} \Phi_u = - \boldsymbol{E}_0 = - E_0 \boldsymbol{e}_z$
から、適当な定数 $c$ を使って、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z + c
  \end{aligned}
$$

と書けることがわかるが、原点で $\Phi_u = 0$ であることから $c=0$ がわかり、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z
  \\
  &= - E_0 r \cos \theta
  \end{aligned}
$$

を得る。

#### (2)
\[A-II\] (2) と \[A-I\] (3) から

$$
\begin{aligned}
\Phi
&= \Phi_u + \Phi_d
\\
&= - E_0 r \cos \theta + \frac{p \cos \theta}{4 \pi \varepsilon_0 r^2}
\\
&= \frac{- 4 \pi \varepsilon_0 E_0 r^3 + p}{4 \pi \varepsilon_0 r^2}
\cos \theta
\end{aligned}
$$

がわかるが、$r=a$ でこれが $\theta$ によらない定数になることから、

$$
\begin{aligned}
p = 4 \pi \varepsilon_0 E_0 a^3
\end{aligned}
$$

を得る。

#### (3)
$r \geq a$ において、(2) より

$$
\begin{aligned}
\Phi
&= \left( -r + \frac{a^3}{r^2} \right) E_0 \cos \theta
\end{aligned}
$$

なので、 $r$ 方向の電場 $E_r = E_r(r, \theta)$ について

$$
\begin{aligned}
E_r (r, \theta)
&= - \frac{\partial \Phi}{\partial r}
\\
&= \left( 1 + \frac{2a^3}{r^3} \right) E_0 \cos \theta
\\
\therefore \ \ 
E_r (a, \theta) &= 3 E_0 \cos \theta
\end{aligned}
$$

がわかる。
そこで、電場に関するガウスの法則を導体表面に適用して、

$$
\begin{aligned}
\sigma
&= \varepsilon_0 E_r(a, \theta)
\\
&= 3 \varepsilon_0 E_0 \cos \theta
\end{aligned}
$$

を得る。

### \[B-I\]
例えば、 $a \gt 0, b \gt 0$ として、
4点 $(0,0,b), (a,0,b), (a,0,-b), (0,0,-b)$ を頂点とする長方形を考える。
この長方形を貫く電流は $(0, a j_y, 0)$ であるから、
この長方形に関してアンペールの法則を適用すると、

$$
\begin{aligned}
a H_x^{II}(z=b) + \int_b^0 dz \ H_z^{II}
+ \int_0^{-b} dz \ H_z^I - a H_x^I(z=-b)
+ \int_{-b}^0 dz \ H_z^I + \int_0^b dz \ H_z^{II}
&= a j_y
\\
\therefore \ \ 
H_x^{II}(z=b) - H_x^I(z=-b)
+ \frac{1}{a} \int_b^0 dz \ H_z^{II} + \frac{1}{a} \int_0^{-b} dz \ H_z^I
+ \frac{1}{a} \int_{-b}^0 dz \ H_z^I + \frac{1}{a} \int_0^b dz \ H_z^{II}
&= j_y
\end{aligned}
$$

となるが、ここで $b \to +0$ とすると、題意の式を得る。

### \[B-II\]
