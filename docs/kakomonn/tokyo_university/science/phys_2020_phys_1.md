---
comments: false
title: 東京大学 理学系研究科 物理学専攻 2020年度 物理学 第1問
tags:
  - Tokyo-University
---
# 東京大学 理学系研究科 物理学専攻 2020年度 物理学 第1問

## **Author**
Miyake

## **Description**
[過去の大学院入試問題（PDF形式）（修士課程のみ）](https://www.phys.s.u-tokyo.ac.jp/wp-content/uploads/2020/04/R2masterphysics.pdf)

## **Kai**
### 1. 

$\sigma_z \left| \uparrow \right\rangle = \left| \uparrow \right\rangle$であるから、
$\left| \uparrow \right\rangle$は
$\sigma_z$ の固有値 $1$ に属する固有ベクトルであり、
$s_z = 1$ である。

また、期待値は、$\left\langle \uparrow \right| \sigma_z \left| \uparrow \right\rangle = 1$である。

### 2.

$\sigma_x$ の固有値は $\pm 1$ であり、
固有値 $1$ に属する固有ベクトル $\left| x \uparrow \right\rangle$ ,
固有値 $-1$ に属する固有ベクトル $\left| x \downarrow \right\rangle$
はそれぞれ、

$$
\begin{aligned}
\left| x \uparrow \right\rangle = \frac{1}{\sqrt{2}}
\begin{pmatrix} 1 \\ 1 \end{pmatrix}
, \ \ \ \ 
\left| x \downarrow \right\rangle = \frac{1}{\sqrt{2}}
\begin{pmatrix} 1 \\ -1 \end{pmatrix}
\end{aligned}
$$

である。

よって、

$$
\begin{aligned}
\left| \uparrow \right\rangle
= \frac{1}{\sqrt{2}} \left| x \uparrow \right\rangle
+ \frac{1}{\sqrt{2}} \left| x \downarrow \right\rangle
\end{aligned}
$$

が成り立つから、 $s_x = \pm 1$である。

また、期待値は、
$\left\langle \uparrow \right| \sigma_x \left| \uparrow \right\rangle = 0$
である。

### 3.

$$
\begin{aligned}
\sigma ( \theta )
= (\cos \theta) \sigma_z + (\sin \theta) \sigma_x
= \begin{pmatrix}
\cos \theta & \sin \theta \\ \sin \theta & - \cos \theta
\end{pmatrix}
\end{aligned}
$$

の固有値は $\pm 1$ であり、
固有値 $1$ に属する固有ベクトル $\left| \theta \uparrow \right\rangle$ ,
固有値 $-1$ に属する固有ベクトル $\left| \theta \downarrow \right\rangle$
はそれぞれ、

$$
\begin{aligned}
\left| \theta \uparrow \right\rangle
=
\begin{pmatrix} \cos \frac{\theta}{2} \\ \sin \frac{\theta}{2} \end{pmatrix}
, \ \ \ \ 
\left| \theta \downarrow \right\rangle
=
\begin{pmatrix} \sin \frac{\theta}{2} \\ - \cos \frac{\theta}{2} \end{pmatrix}
\end{aligned}
$$

である。

よって、

$$
\begin{aligned}
\left| \uparrow \right\rangle
= \cos \frac{\theta}{2} \left| \theta \uparrow \right\rangle
+ \sin \frac{\theta}{2} \left| \theta \downarrow \right\rangle
\end{aligned}
$$

が成り立つから、 $s_\theta = \pm 1$ である。
（ただし、$\theta = 0$ のときは $s_\theta = 1$ 、$\theta = \pi$ のときは $s_\theta = -1$である。）

また、期待値は、$\left\langle \uparrow \right| \sigma(\theta) \left| \uparrow \right\rangle = \cos \theta$である。

### 4. 

$\left( s_z^A, s_z^B \right) = (1, -1), (-1, 1)$であり、$s_z^A s_z^B$ の期待値は $-1$ である。

### 5.
上の 2. で考えたように、

$$
\begin{aligned}
\left| \uparrow \right\rangle
&= \frac{1}{\sqrt{2}} \left| x \uparrow \right\rangle
+ \frac{1}{\sqrt{2}} \left| x \downarrow \right\rangle
\\
\left| \downarrow \right\rangle
&= \frac{1}{\sqrt{2}} \left| x \uparrow \right\rangle
- \frac{1}{\sqrt{2}} \left| x \downarrow \right\rangle
\end{aligned}
$$

であるから、

$$
\begin{aligned}
\left| \Psi \right\rangle
&= \frac{1}{\sqrt{2}} \left(
\left| \uparrow \right\rangle_A \left| \downarrow \right\rangle_B
-
\left| \downarrow \right\rangle_A \left| \uparrow \right\rangle_B
\right)
\\
&= \frac{1}{2 \sqrt{2}} \left(
\left( \left| x \uparrow \right\rangle_A
+ \left| x \downarrow \right\rangle_A \right)
\left( \left| x \uparrow \right\rangle_B
- \left| x \downarrow \right\rangle_B \right)
-
\left( \left| x \uparrow \right\rangle_A
- \left| x \downarrow \right\rangle_A \right)
\left( \left| x \uparrow \right\rangle_B
+ \left| x \downarrow \right\rangle_B \right)
\right)
\\
&= - \frac{1}{\sqrt{2}} \left(
\left| x \uparrow \right\rangle_A \left| x \downarrow \right\rangle_B
-
\left| x \downarrow \right\rangle_A \left| x \uparrow \right\rangle_B
\right)
\end{aligned}
$$

となる。

よって、$\left( s_x^A, s_x^B \right) = (1, -1), (-1, 1)$ であり、
$s_x^A s_x^B$ の期待値は $-1$ である。

### 6. 
上の 3. で考えたように、

$$
\begin{aligned}
\left| \uparrow \right\rangle
&= \cos \frac{\theta}{2} \left| \theta \uparrow \right\rangle
+ \sin \frac{\theta}{2} \left| \theta \downarrow \right\rangle
\\
\left| \downarrow \right\rangle
&= \sin \frac{\theta}{2} \left| \theta \uparrow \right\rangle
- \cos \frac{\theta}{2} \left| \theta \downarrow \right\rangle
\end{aligned}
$$

であるから、

$$
\begin{aligned}
\left| \Psi \right\rangle
&= \frac{1}{\sqrt{2}} \left(
\left| \uparrow \right\rangle_A \left| \downarrow \right\rangle_B
-
\left| \downarrow \right\rangle_A \left| \uparrow \right\rangle_B
\right)
\\
&= \frac{1}{\sqrt{2}} \left(
\left(
\cos \frac{\theta}{2} \left| \theta \uparrow \right\rangle_A
+ \sin \frac{\theta}{2} \left| \theta \downarrow \right\rangle_A
\right)
\left(
\sin \frac{\theta}{2} \left| \theta \uparrow \right\rangle_B
- \cos \frac{\theta}{2} \left| \theta \downarrow \right\rangle_B
\right)
-
\left(
\sin \frac{\theta}{2} \left| \theta \uparrow \right\rangle_A
- \cos \frac{\theta}{2} \left| \theta \downarrow \right\rangle_A
\right)
\left(
\cos \frac{\theta}{2} \left| \theta \uparrow \right\rangle_B
+ \sin \frac{\theta}{2} \left| \theta \downarrow \right\rangle_B
\right)
\right)
\\
&= - \frac{1}{\sqrt{2}} \left(
\left| \theta \uparrow \right\rangle_A
\left| \theta \downarrow \right\rangle_B
-
\left| \theta \downarrow \right\rangle_A
\left| \theta \uparrow \right\rangle_B
\right)
\end{aligned}
$$

となる。

よって、$\left( s_\theta^A, s_\theta^B \right) = (1, -1), (-1, 1)$ である。

### 7.

$$
\begin{aligned}
\left| \Psi \right\rangle
&= \frac{1}{\sqrt{2}} \left(
\left| \uparrow \right\rangle_A \left| \downarrow \right\rangle_B
-
\left| \downarrow \right\rangle_A \left| \uparrow \right\rangle_B
\right)
\\
&= \frac{1}{\sqrt{2}} \left(
\left(
\cos \frac{\theta}{2} \left| \theta \uparrow \right\rangle_A
+ \sin \frac{\theta}{2} \left| \theta \downarrow \right\rangle_A
\right)
\left(
\sin \frac{\varphi}{2} \left| \varphi \uparrow \right\rangle_B
- \cos \frac{\varphi}{2} \left| \varphi \downarrow \right\rangle_B
\right)
-
\left(
\sin \frac{\theta}{2} \left| \theta \uparrow \right\rangle_A
- \cos \frac{\theta}{2} \left| \theta \downarrow \right\rangle_A
\right)
\left(
\cos \frac{\varphi}{2} \left| \varphi \uparrow \right\rangle_B
+ \sin \frac{\varphi}{2} \left| \varphi \downarrow \right\rangle_B
\right)
\right)
\\
&= \frac{1}{\sqrt{2}} \left(
\sin \frac{\varphi - \theta}{2}
\left| \theta \uparrow \right\rangle_A
\left| \varphi \uparrow \right\rangle_B
+
\sin \frac{\varphi - \theta}{2}
\left| \theta \downarrow \right\rangle_A
\left| \varphi \downarrow \right\rangle_B
-
\cos \frac{\varphi - \theta}{2}
\left| \theta \uparrow \right\rangle_A
\left| \varphi \downarrow \right\rangle_B
+
\cos \frac{\varphi - \theta}{2}
\left| \theta \downarrow \right\rangle_A
\left| \varphi \uparrow \right\rangle_B
\right)
\end{aligned}
$$

となる。

よって、$\varphi - \theta = 0$ のときは
$\left( s_\theta^A, s_\varphi^B \right) = (1, -1), (-1, 1)$
、
$\varphi - \theta = \pm \pi$ のときは
$\left( s_\theta^A, s_\varphi^B \right) = (1, 1), (-1, -1)$
、
それ以外のときは
$\left( s_\theta^A, s_\varphi^B \right) = (1, 1), (-1, -1), (1, -1), (-1, 1)$
である。

また、 $s_\theta^A s_\varphi^B$ の期待値は、次のように計算できる：

$$
\begin{aligned}
&\frac{1}{2} \sin^2 \frac{\varphi - \theta}{2} \cdot 2 \cdot 1
+
\frac{1}{2} \cos^2 \frac{\varphi - \theta}{2} \cdot 2 \cdot (-1)
\\
&=
\sin^2 \frac{\varphi - \theta}{2}
-
\cos^2 \frac{\varphi - \theta}{2}
\\
&=
- \cos ( \varphi - \theta )
\end{aligned}
$$

### 8.
$\varphi - \theta$ のとりうる値は、
$\varphi - \theta = -240^\circ, -120^\circ, 0^\circ, 120^\circ, 240^\circ$ 
であり、その確率はそれぞれ

$$
\begin{aligned}
\frac{1}{9}, \frac{2}{9}, \frac{3}{9}, \frac{2}{9}, \frac{1}{9}
\end{aligned}
$$

である。

例えば、 $\varphi - \theta = -240^\circ$ のとき、

$$
\begin{aligned}
\left| \Psi \right\rangle
= \frac{1}{\sqrt{2}} \left(
- \frac{\sqrt{3}}{2}
\left| \theta \uparrow \right\rangle_A
\left| \varphi \uparrow \right\rangle_B
-
\frac{\sqrt{3}}{2}
\left| \theta \downarrow \right\rangle_A
\left| \varphi \downarrow \right\rangle_B
-
\frac{1}{2}
\left| \theta \uparrow \right\rangle_A
\left| \varphi \downarrow \right\rangle_B
+
\frac{1}{2}
\left| \theta \downarrow \right\rangle_A
\left| \varphi \uparrow \right\rangle_B
\right)
\end{aligned}
$$

であるから、このとき、$s^A s^B$ のとりうる値は、$\pm 1$ であり、 $1, -1$ である確率はそれぞれ、

$$
\begin{aligned}
\frac{3}{8} \cdot 2 = \frac{3}{4}
, \ \ 
\frac{1}{8} \cdot 2 = \frac{1}{4}
\end{aligned}
$$

である。また、 $(s^A, s^B)$ がとりうる値は、
$(s^A, s^B) = (1, 1), (1, -1), (1, -1), (-1, 1)$
である。

$\varphi - \theta = -120^\circ, 120^\circ, 240^\circ$ のときも同様である。

$\varphi - \theta = 0^\circ$ のときは、

$$
\begin{aligned}
\left| \Psi \right\rangle
= - \frac{1}{\sqrt{2}} \left(
\left| \theta \uparrow \right\rangle_A
\left| \varphi \downarrow \right\rangle_B
-
\left| \theta \downarrow \right\rangle_A
\left| \varphi \uparrow \right\rangle_B
\right)
\end{aligned}
$$

であるから、
$(s^A, s^B)$ がとりうる値は $(s^A, s^B) = (1, -1), (-1, 1)$ であり、
$s^A s^B$ のとりうる値は $-1$ のみである。

以上より、
$(s^A, s^B)$ がとりうる値は、
$(s^A, s^B) = (1, 1), (1, -1), (1, -1), (-1, 1)$
であり、
$s^A s^B$ の期待値は、

$$
\begin{aligned}
\frac{6}{9} \cdot
\left( \frac{3}{4} \cdot 1 + \frac{1}{4} \cdot (-1) \right)
+ \frac{3}{9} \cdot (-1)
= 0
\end{aligned}
$$

である。

### 9.
#### (i)
このとき、
$\left( s_{0^\circ}^B, s_{120^\circ}^B, s_{240^\circ}^B \right) = (-1,-1,-1)$
であるから、 $s^A s^B$ は必ず $-1$ であり、期待値も $-1$ である。

#### (ii)
このとき、$\left( s_{0^\circ}^B, s_{120^\circ}^B, s_{240^\circ}^B \right) = (-1,-1,+1)$
であるから、 $s^A s^B$ が
$1$ になるのは $2 \times 2 + 1 \times 1 = 5$ 通り、
$-1$ になるのは $2 \times 1 + 1 \times 2 = 4$ 通りである。
これらは等確率であるから、 $s^A s^B$ の期待値は、

$$
\begin{aligned}
\frac{5}{9} \cdot 1 + \frac{4}{9} \cdot (-1) = \frac{1}{9}
\end{aligned}
$$

である。

#### (iii)

$\left( s_{0^\circ}^A, s_{120^\circ}^A, s_{240^\circ}^A \right) = (+1,+1,+1), (-1,-1,-1)$
のとき、(i) より、 $s^A s^B$ の期待値は $-1$ である。

$\left( s_{0^\circ}^A, s_{120^\circ}^A, s_{240^\circ}^A \right) = (+1,+1,-1), (+1,-1,+1), (-1,+1,+1), (+1,-1,-1), (-1,+1,-1), (-1,-1,+1)$
のとき、(ii) より、 $s^A s^B$ の期待値は $1/9$ である。

よって、 $s^A s^B$ の期待値は

$$
\begin{aligned}
\frac{2}{8} \cdot (-1) + \frac{6}{8} \cdot \frac{1}{9}
= - \frac{1}{6}
\end{aligned}
$$

である。
