---
comments: false
description: 京都大学 大学院 理学研究科 物理学・宇宙物理学専攻 2022年度 II-2C
keywords: Kyoto-University, 2022
---

## **Source**
京都大学 大学院 理学研究科 物理学・宇宙物理学専攻 2022年度 II-2C （力学）

By: Miyake

## **Description**

## **Kai**
### (1)

$$
\begin{aligned}
T
&= \frac{1}{2} m l^2 \dot{\theta}_1^2 + \frac{1}{2} m l^2 \dot{\theta}_2^2
\\
U
&= mgl (1 - \cos \theta_1) + mgl (1 - \cos \theta_2)
+ \frac{1}{2} k (\theta_1 - \theta_2)^2
\\
&\simeq \frac{1}{2} mgl \theta_1^2 + \frac{1}{2} mgl \theta_2^2
+ \frac{1}{2} k (\theta_1 - \theta_2)^2
\\
&= \frac{1}{2} (mgl+k) \left( \theta_1^2 + \theta_2^2 \right)
- k \theta_1 \theta_2
\\
L
&= T - U
\\
&=
\frac{1}{2} m l^2 \dot{\theta}_1^2 + \frac{1}{2} m l^2 \dot{\theta}_2^2
- \frac{1}{2} (mgl+k) \left( \theta_1^2 + \theta_2^2 \right)
+ k \theta_1 \theta_2
\end{aligned}
$$

### (2)

$$
\begin{aligned}
\frac{d}{dt} \frac{\partial L}{\partial \dot{\theta}_1}
&= \frac{d}{dt} ml^2 \dot{\theta}_1
= ml^2 \ddot{\theta}_1
\\
\frac{\partial L}{\partial \theta_1}
&= -(mgl+k) \theta_1 + k \theta_2
\\
\frac{d}{dt} \frac{\partial L}{\partial \dot{\theta}_2}
&= \frac{d}{dt} ml^2 \dot{\theta}_2
= ml^2 \ddot{\theta}_2
\\
\frac{\partial L}{\partial \theta_2}
&= -(mgl+k) \theta_2 + k \theta_1
\end{aligned}
$$

であるから、$\theta_1, \theta_2$ に関するオイラー-ラグランジュの方程式より、

$$
\begin{aligned}
ml^2 \begin{pmatrix} \ddot{\theta}_1 \\ \ddot{\theta}_2 \end{pmatrix}
=
\begin{pmatrix} -(mgl+k) & k \\ k & -(mgl+k) \end{pmatrix}
\begin{pmatrix} \theta_1 \\ \theta_2 \end{pmatrix}
\end{aligned}
$$

であり、

$$
\begin{aligned}
A = - \frac{mgl+k}{ml^2}
, \ \ 
B = \frac{k}{ml^2}
, \ \ 
C = \frac{k}{ml^2}
, \ \ 
D = - \frac{mgl+k}{ml^2}
\end{aligned}
$$

がわかる。

### (3)
(2) で得た運動方程式に
$\theta_1(t)=Q_1 \sin (\omega t + \delta_1), \ \theta_2(t)=Q_2 \sin (\omega t + \delta_2)$
を代入すると、

$$
\begin{aligned}
- \omega^2
\begin{pmatrix}
Q_1 \sin (\omega t + \delta_1) \\
Q_2 \sin (\omega t + \delta_2) \\
\end{pmatrix}
=
\begin{pmatrix} A & B \\ B & A \end{pmatrix}
\begin{pmatrix}
Q_1 \sin (\omega t + \delta_1) \\
Q_2 \sin (\omega t + \delta_2) \\
\end{pmatrix}
\end{aligned}
$$

となる。
$Q_1=Q_2=0$ 以外で、任意の $t$ についてこれが成り立つためには、
以下が必要である：

$$
\begin{aligned}
0
&= \det
\begin{pmatrix} \omega^2 + A & B \\ B & \omega^2 + A \end{pmatrix}
\\
&= \omega^4 + 2A \omega^2 + A^2 - B^2
\\
&= \left( \omega^2 + (A+B) \right) \left( \omega^2 + (A-B) \right)
\end{aligned}
$$

$0 \lt -A-B \lt -A+B$ なので、

$$
\begin{aligned}
\omega_- &= \sqrt{-A-B} = \sqrt{\frac{g}{l}}
\\
\omega_+ &= \sqrt{-A+B} = \sqrt{\frac{mgl+2k}{ml^2}}
\end{aligned}
$$

を得る。

### (4)
(i)
$\omega = \omega_-$ の場合を考える。

$$
\begin{aligned}
\begin{pmatrix} A & B \\ B & A \end{pmatrix}
\begin{pmatrix} u \\ v \end{pmatrix}
=
(A+B)
\begin{pmatrix} u \\ v \end{pmatrix}
\end{aligned}
$$

とおくと $u=v$ を得るから、
$Q_1 \sin (\omega_- t + \delta_1) = Q_2 \sin (\omega_- t + \delta_2)$
であり、任意の $t$ についてこれが成り立つということは
$Q_1 = Q_2, \ \delta_1 = \delta_2$ ということであり、
これが求める条件である。

(ii)
$\omega = \omega_+$ の場合を考える。

$$
\begin{aligned}
\begin{pmatrix} A & B \\ B & A \end{pmatrix}
\begin{pmatrix} u \\ v \end{pmatrix}
=
(A-B)
\begin{pmatrix} u \\ v \end{pmatrix}
\end{aligned}
$$

とおくと $u+v=0$ を得るから、
$Q_1 \sin (\omega_- t + \delta_1) = -Q_2 \sin (\omega_- t + \delta_2)$
であり、任意の $t$ についてこれが成り立つということは
$Q_1 = -Q_2, \ \delta_1 = \delta_2$
（あるいは $Q_1 = Q_2, \ |\delta_1 - \delta_2| = \pi$ ）
ということであり、これが求める条件である。

(i), (ii) より、求める一般解は、
$Q_-, \delta_-, Q_+, \delta_+$ を任意定数として、

$$
\begin{aligned}
\theta_1(t)
&= Q_- \sin (\omega_- t + \delta_-) + Q_+ \sin (\omega_+ t + \delta_+)
\\
\theta_2(t)
&= Q_- \sin (\omega_- t + \delta_-) - Q_+ \sin (\omega_+ t + \delta_+)
\end{aligned}
$$

である。
これが (2) で求めた運動方程式を満たすことを確認できる。

### (5)
初期条件

$$
\begin{aligned}
0 &= \theta_1(0) = Q_- \sin \delta_- + Q_+ \sin \delta_+
\\
0 &= \theta_2(0) = Q_- \sin \delta_- - Q_+ \sin \delta_+
\\
\Omega_0 &= \dot{\theta}_1(0)
= Q_- \omega_- \cos \delta_- + Q_+ \omega_+ \cos \delta_+
\\
0 &= \dot{\theta}_2(0)
= Q_- \omega_- \cos \delta_- - Q_+ \omega_+ \cos \delta_+
\end{aligned}
$$

から、

$$
\begin{aligned}
\delta_- = \delta_+ = 0
, \ \ 
Q_- = \frac{\Omega_0}{2 \omega_-}
, \ \ 
Q_+ = \frac{\Omega_0}{2 \omega_+}
\end{aligned}
$$

がわかるので、

$$
\begin{aligned}
\theta_1(t)
&= \frac{\Omega_0}{2 \omega_-} \sin (\omega_- t)
+ \frac{\Omega_0}{2 \omega_+} \sin (\omega_+ t)
\\
\theta_2(t)
&= \frac{\Omega_0}{2 \omega_-} \sin (\omega_- t)
- \frac{\Omega_0}{2 \omega_+} \sin (\omega_+ t)
\end{aligned}
$$

を得る。