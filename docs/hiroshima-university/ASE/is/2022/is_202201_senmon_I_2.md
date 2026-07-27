---
sidebar_label: "2022年1月実施 専門科目I 問題2"
tags:
  - Hiroshima-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2022年1月実施 専門科目I 問題2


## **Author**
samparker, 祭音Myyura

## **Description**
(1) 関数 $z = z(u, v)$ は、実変数 $(u, v) \in \mathbb{R}^2$ に関して、$C^2$ 級であると仮定する。
また、$(x, y) \in \mathbb{R}^2$ に対して、写像 $(u, v) = (x + y, x - y)$ を定義する。

$$
z_{xx} = \frac{\partial^2 z}{\partial x^2}, \quad z_{xy} = \frac{\partial^2 z}{\partial x \partial y}, \quad z_{yy} = \frac{\partial^2 z}{\partial y^2}
$$

を

$$
z_{uu} = \frac{\partial^2 z}{\partial u^2}, \quad z_{uv} = \frac{\partial^2 z}{\partial u \partial v}, \quad z_{vv} = \frac{\partial^2 z}{\partial v^2}
$$

を用いて表せ。

(2) 点 $O(0, 0)$ 以外で定義された関数

$$
z = (x + y) \ln\{2(x^2 + y^2)\}
$$

の全ての極値およびそのときの $(x, y)$ を求めよ。

--------------------------------------------------------

(1) Suppose that the function $z = z(u, v)$ is of class $C^2$ in real variables $(u, v) \in \mathbb{R}^2$.
Define the mapping by $(u, v) = (x + y, x - y)$ for $(x, y) \in \mathbb{R}^2$.
Express

$$
z_{xx} = \frac{\partial^2 z}{\partial x^2}, \quad z_{xy} = \frac{\partial^2 z}{\partial x \partial y}, \quad z_{yy} = \frac{\partial^2 z}{\partial y^2}
$$

in terms of

$$
z_{uu} = \frac{\partial^2 z}{\partial u^2}, \quad z_{uv} = \frac{\partial^2 z}{\partial u \partial v}, \quad z_{vv} = \frac{\partial^2 z}{\partial v^2}.
$$

(2) Find all local extrema and their extremum points of the function

$$
z = (x + y) \ln\{2(x^2 + y^2)\}
$$

defined for $(x,y) \neq (0,0)$.


### 题目描述

1. 设 $z=z(u,v)$ 关于实变量 $(u,v)\in\mathbb R^2$ 为 $C^2$ 类函数，并对 $(x,y)\in\mathbb R^2$ 定义变量变换

   $$
   (u,v)=(x+y,x-y).
   $$

   用

   $$
   z_{uu}=\frac{\partial^2z}{\partial u^2},\qquad
   z_{uv}=\frac{\partial^2z}{\partial u\partial v},\qquad
   z_{vv}=\frac{\partial^2z}{\partial v^2}
   $$

   表示

   $$
   z_{xx}=\frac{\partial^2z}{\partial x^2},\qquad
   z_{xy}=\frac{\partial^2z}{\partial x\partial y},\qquad
   z_{yy}=\frac{\partial^2z}{\partial y^2}.
   $$
2. 函数

   $$
   z=(x+y)\ln\{2(x^2+y^2)\}
   $$

   定义在除原点 $O(0,0)$ 外的平面上。求它的全部局部极值以及取得各极值时的 $(x,y)$。

#### 考点

- 多元微分：对线性变量变换连续使用链式法则，把关于 $x,y$ 的二阶偏导改写为关于 $u,v$ 的二阶偏导。
- 局部极值：求二维函数在去掉原点后的驻点，并用二阶信息或等价分析判别极大、极小及其位置。

## **Kai**
### (1)

$$
\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \frac{\partial v}{\partial x} = \frac{\partial z}{\partial u} + \frac{\partial z}{\partial v}
$$

$$
\frac{\partial z}{\partial y} = \frac{\partial z}{\partial u} \frac{\partial u}{\partial y} + \frac{\partial z}{\partial v} \frac{\partial v}{\partial y} = \frac{\partial z}{\partial u} - \frac{\partial z}{\partial v}
$$

$$
z_{xx} = \frac{\partial^2 z}{\partial x^2} = \frac{\partial^2 z}{\partial u^2} + \frac{\partial^2 z}{\partial u \partial v} + \frac{\partial^2 z}{\partial v \partial u} + \frac{\partial^2 z}{\partial v^2} = \frac{\partial^2 z}{\partial u^2} + 2\frac{\partial^2 z}{\partial u \partial v} + \frac{\partial^2 z}{\partial v^2}
$$

Similarly,

$$
z_{yy} = \frac{\partial^2 z}{\partial u^2} - 2\frac{\partial^2 z}{\partial u \partial v} + \frac{\partial^2 z}{\partial v^2}
$$

$$
z_{xy} = \frac{\partial^2 z}{\partial u^2} - \frac{\partial^2 z}{\partial v^2}
$$

### (2)
Let

$$
x = r \cos \theta, y = r \sin \theta
$$

Then we have

$$
z = r(\cos \theta + \sin \theta) \ln(2r^2)
$$

$$
\frac{\partial z}{\partial r} = (\sin \theta + \cos \theta) \left(\ln (2r^2) + 2\right)
$$

$$
\frac{\partial z}{\partial \theta} = r(\cos \theta - \sin \theta) \ln(2r^2)
$$

Solve the following equations

$$
\begin{cases}
    \frac{\partial z}{\partial r} = (\sin \theta + \cos \theta) \left(\ln (2r^2) + 2\right) = 0 \\
    \frac{\partial z}{\partial \theta} = r(\cos \theta - \sin \theta) \ln(2r^2) = 0
\end{cases}
$$

we get extremum points

$$
(-\frac{1}{\sqrt{2}e}, \frac{\pi}{4} + 2k\pi), (\frac{1}{\sqrt{2}e}, \frac{\pi}{4} + 2k\pi), (\frac{1}{\sqrt{2}e}, \frac{3\pi}{4} + 2k\pi), (-\frac{1}{\sqrt{2}e}, \frac{3\pi}{4} + 2k\pi)
$$

where $k$ is an integer, and extrema are

$$
\frac{2}{e}, -\frac{2}{e}.
$$
