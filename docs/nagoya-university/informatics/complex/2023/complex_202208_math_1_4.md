---
sidebar_label: "2022年8月実施 数1 [4]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Affine-Transformation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 数1 [4]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/153686fd38b76aec8fe63b4c47663818.pdf)

相似変換の定義（題意の要約）：$Q^TQ=I$ を満たす実 $2\times2$ 行列 $Q$，
$\lambda>0$，$h\in\mathbb R^2$ による $r'=\lambda Qr+h$ を考える。
$\lambda=1$ のときは合同変換である。



次の方程式 (c) で表される図形 $F_c$ を方程式 (d) で表される図形 $F_d$ に移す相似変換があれば、そのすべてを成分表示で示せ。そのような相似変換がなければ、「ない」と答えて、ないことを証明せよ。

(c) $y = x^2$ ,

(d) $y' = \frac{1}{4}x'^2$

### 题目描述

平面图形 $F_c,F_d$ 分别由

$$
\text{(c)}\quad y=x^2,
\qquad
\text{(d)}\quad y'=\frac14x'^2
$$

给出。若存在将 $F_c$ 映为 $F_d$ 的相似变换，请用分量形式写出全部这种变换；若不存在，则回答“不存在”并证明。

## **Kai**

相似変換の一般形を

$$
\begin{pmatrix}x'\\y'\end{pmatrix}
=\rho Q\begin{pmatrix}x\\y\end{pmatrix}
+\begin{pmatrix}h\\k\end{pmatrix},
\qquad \rho>0,\quad Q=(q_{ij})\in O(2)
$$

とする。放物線 $F_c$ を $(x,y)=(t,t^2)$ と媒介表示すると，

$$
x'=\rho(q_{11}t+q_{12}t^2)+h,\qquad
y'=\rho(q_{21}t+q_{22}t^2)+k.
$$

これがすべての $t$ に対して $y'=(x')^2/4$ を満たす必要がある。
右辺に4次項が現れないためには $q_{12}=0$ が必要である。
$Q$ は直交行列なので，このとき

$$
Q=\operatorname{diag}(\varepsilon_1,\varepsilon_2),
\qquad \varepsilon_1,\varepsilon_2\in\{1,-1\}.
$$

したがって恒等式

$$
\rho\varepsilon_2t^2+k
=\frac14(\rho\varepsilon_1t+h)^2
$$

の係数を比較すると

$$
h=0,\qquad k=0,\qquad
\rho\varepsilon_2=\frac{\rho^2}{4}.
$$

$\rho>0$ より $\varepsilon_2=1,\ \rho=4$ であり，
$\varepsilon_1$ は任意である。よって求める相似変換はちょうど

$$
\boxed{(x',y')=(4x,4y)}
\qquad\text{および}\qquad
\boxed{(x',y')=(-4x,4y)}
$$

の2つである。
