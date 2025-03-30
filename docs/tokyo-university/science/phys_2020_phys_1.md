---
sidebar_label: '物理学専攻 2020年度 物理学 第1問'
sidebar_position: 3
tags:
  - Tokyo-University
---

# 東京大学 理学系研究科 物理学専攻 2020年度 物理学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 第1問

量子力学的二状態系を考えよう。この場合、観測量は $2 \times 2$ のエルミート行列で表される演算子に対応する。以下では次の行列表示をもつ観測量

$$
\sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \quad \sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma(\theta) = (\cos \theta) \sigma_z + (\sin \theta) \sigma_x \tag{1}
$$

を考え、状態ベクトルを

$$
\mid \uparrow \rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad \mid \downarrow \rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \tag{2}
$$

を用いて表す。

1.&nbsp;状態 $\mid \uparrow \rangle$ において観測量 $\sigma_z$ を測定した。測定結果が取りうる値 $s_z$、およびその期待値を求めよ。

2.&nbsp;状態 $\mid \uparrow \rangle$ において観測量 $\sigma_x$ を測定した。測定結果が取りうる値 $s_x$、およびその期待値を求めよ。

3.&nbsp;状態 $\mid \uparrow \rangle$ において観測量 $\sigma(\theta)$ を測定した。測定結果が取りうる値 $s_\theta$、およびその期待値を求めよ。

上記の二状態系 $A, B$ からなる複合系を考える。その状態は四状態

$$
\mid \uparrow \rangle_A | \uparrow \rangle_B, \quad \mid \uparrow \rangle_A \mid \downarrow \rangle_B, \quad \mid \downarrow \rangle_A \mid \uparrow \rangle_B, \quad \mid \downarrow \rangle_A \mid \downarrow \rangle_B \tag{3}
$$

の線形結合で書ける。そのような複合系を準備したのち、二状態系 $A, B$ をそれぞれ別の場所で測定する。模式図は以下を参照せよ：

_________________

#### 模式図：

部分系$A$ を測定 $\longleftarrow$ 複合系を準備 $\longrightarrow$ 部分系 $B$ を測定

_________________

この設定の下で、次の実験を考える。

_________________

#### 実験：

状態

$$
| \Psi\rangle = \frac{1}{\sqrt{2}} \left( \mid \uparrow \rangle_A \mid \downarrow \rangle_B - \mid \downarrow \rangle_A \mid \uparrow \rangle_B \right) \tag{4}
$$

の複合系を毎回新たに準備し、部分系 $A$ において観測量 $\sigma^A_z, \sigma^A_x, \sigma^A(\theta)$ のいずれか、部分系 $B$ において観測量 $\sigma^B_z, \sigma^B_x, \sigma^B(\varphi)$ のいずれかを測定する。

_________________

この実験を、何度も繰り返すことを考えよう。


4.&nbsp;毎回、部分系 $A$ で $\sigma^A_z$、部分系 $B$ で $\sigma^B_z$ を測定する。取りうる測定結果の組 $(s^A_z, s^B_z)$ を述べよ。また、積 $s^A_z s^B_z$ の期待値を求めよ。

5.&nbsp;毎回、部分系 $A$ で $\sigma^A_x$、部分系 $B$ で $\sigma^B_x$ を測定する。取りうる測定結果の組 $(s^A_x, s^B_x)$ を述べよ。また、積 $s^A_x s^B_x$ の期待値を求めよ。

6.&nbsp;毎回、部分系 $A$ で $\sigma^A(\theta)$、部分系 $B$ で $\sigma^B(\theta)$ を測定する。この場合、測定結果の組 $(s^A_\theta, s^B_\theta)$ は $s^A_\theta = -s^B_\theta = \pm 1$ を満たすことを示せ。

7.&nbsp;毎回、部分系 $A$ で $\sigma^A(\theta)$、部分系 $B$ で $\sigma^B(\varphi)$ を測定する。取りうる測定結果の組 $(s^A_0, s^B_\varphi)$ を述べよ。また、積 $s^A_0 s^B_\varphi$ の期待値を求めよ。

8.&nbsp;各回、部分系 $A$ で測定する観測量 $\sigma^A(\theta)$ を $\sigma^A(0^\circ)、\sigma^A(120^\circ)、\sigma^A(240^\circ)$ からそれぞれ 1/3 の確率で測定者が選択することにし、また、部分系 $B$ でも、測定する観測量 $\sigma^B(\varphi)$ を $\sigma^B(0^\circ)、\sigma^B(120^\circ)、\sigma^B(240^\circ)$ からそれぞれ 1/3 の確率で測定者が選択することにする。測定結果の組 $(s^A, s^B)$ の取りうる値を述べよ。また、積 $s^A s^B$ の期待値を求め、それが 0 になることを示せ。

これまでは量子力学を用いて考察を行ったが、そのようにして得られた設問 8 の結論は、以下でのべる決定論的仮説と矛盾することを確認しよう。

設問 8 の設定において、量子力学的には、各回の実験では、部分系 $A$ について $\sigma^A(0^\circ)、\sigma^A(120^\circ)、\sigma^A(240^\circ)$ のどれか一つ、部分系 $B$ について $\sigma^B(0^\circ)、\sigma^B(120^\circ)、\sigma^B(240^\circ)$ のどれか一つしか測定できない。これに対し、決定論的に、次のように考えてみよう。

_________________

#### 仮説：

各回の実験ごとに、実際に対応する観測量を測定しなかったかにかかわらず、部分系 $A$ で $\sigma^A(0^\circ)、\sigma^A(120^\circ)、\sigma^A(240^\circ)$ を測定したとすると得られるであろう測定結果 $(s^A_{0^\circ}, s^A_{120^\circ}, s^A_{240^\circ})$、部分系 $B$ で $\sigma^B(0^\circ)、\sigma^B(120^\circ)、\sigma^B(240^\circ)$ を測定した場合に得られるであろう測定結果 $(s^B_{0^\circ}, s^B_{120^\circ}, s^B_{240^\circ})$ があらかじめ決まっているとする。設問 6 よりそれらは

$$
s^A_{0^\circ} = -s^B_{0^\circ}, \quad s^A_{120^\circ} = -s^B_{120^\circ}, \quad s^A_{240^\circ} = -s^B_{240^\circ} \tag{5}
$$

を満たすとする。

_________________

9.&nbsp;上記の仮説のもと、設問 8 と同様、部分系 $A$ で $\sigma^A(0^\circ)$、$\sigma^A(120^\circ)$、$\sigma^A(240^\circ)$ をそれぞれ 1/3 の確率で測定し、部分系 $B$ で $\sigma^B(0^\circ)$、$\sigma^B(120^\circ)$、$\sigma^B(240^\circ)$ をそれぞれ 1/3 の確率で測定する。このとき、$\sigma^A(\theta)$ を測定した際に得られる測定結果を $s^A = s^A_\theta$、$\sigma^B(\varphi)$ を測定した際に得られる測定結果を $s^B = s^B_\varphi$ と書く。

(i) $(s^A_{0^\circ}, s^A_{120^\circ}, s^A_{240^\circ}) = (+1, +1, +1)$ の場合、$s^A s^B$ の期待値を求めよ。

(ii) $(s^A_{0^\circ}, s^A_{120^\circ}, s^A_{240^\circ}) = (+1, +1, -1)$ の場合、$s^A s^B$ の期待値を求めよ。

(iii) 八通り $(s^A_{0^\circ}, s^A_{120^\circ}, s^A_{240^\circ}) = (\pm 1, \pm 1, \pm 1)$ が任意に起こる場合、$s^A s^B$ の期待値は負であることを示せ。

設問 8 の量子力学による結果では $s^A s^B$ の期待値は 0 であり、上記の決定論的仮説のもとでは $s^A s^B$ の期待値は負となった。これより、量子力学は上記の決定論的仮説とは矛盾することがわかる。

（この問題は、N. David Mermin, Physics Today 38, 4, pp.38-47 (1985) を参考にした。）

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

$$
\begin{aligned}
\left( s_{0^\circ}^A, s_{120^\circ}^A, s_{240^\circ}^A \right) = (+1,+1,-1), (+1,-1,+1), (-1,+1,+1), (+1,-1,-1), (-1,+1,-1), (-1,-1,+1)
\end{aligned}
$$

のとき、(ii) より、 $s^A s^B$ の期待値は $1/9$ である。

よって、 $s^A s^B$ の期待値は

$$
\begin{aligned}
\frac{2}{8} \cdot (-1) + \frac{6}{8} \cdot \frac{1}{9}
= - \frac{1}{6}
\end{aligned}
$$

である。
