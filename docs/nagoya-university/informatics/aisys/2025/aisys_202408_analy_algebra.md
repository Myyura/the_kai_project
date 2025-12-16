---
sidebar_label: "2024年8月実施 解析・線形代数"
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 知能システム学専攻 2024年8月実施 解析・線形代数

## **Author**
祭音Myyura (with Gemini 3 pro deepthink and GPT 5.2 pro extended thinking)

## **Description**
### \[1\]
次の微分方程式 (1) に対して、以下の問いに答えよ。

$$
\begin{align}
    \frac{d^3x}{dt^3} - 3\frac{d^2x}{dt^2} - 6\frac{dx}{dt} + 8x = 0 \quad \tag{1}
\end{align}
$$

(a) $\bm{u}^\top = \left(x, \frac{dx}{dt}, \frac{d^2x}{dt^2}\right)$ とすると、式(1) は $A\bm{u} = \frac{d\bm{u}}{dt}$ と表せる。このとき、行列 $A$ を求めよ。

(b) 行列 $A$ の固有値を求めよ。

(c) 微分方程式 (1) を解け。

### \[2\]
複素数について、以下の問いに答えよ。

(a) 複素数 $a_1 = \sqrt{3} + i, a_2 = 2i$ に対して、絶対値と偏角を示せ。

(b) 3つの複素数 $z_1, z_2, z_3$ を複素平面上の点にそれぞれ対応させる。これらの点が正三角形をなすとき、次の式 (2) が成り立つことを示せ。

$$
\begin{align}
    z_1^2 + z_2^2 + z_3^2 - z_1z_2 - z_2z_3 - z_3z_1 = 0 \tag{2}
\end{align}
$$

### \[3\]
次の立体について、以下の問いに答えよ。

$$
V = \{(x,y,z) \in \mathbb{R}^3 \mid x^{\frac{2}{3}} + y^{\frac{2}{3}} + z^{\frac{2}{3}} \le 1, x \ge 0, y \ge 0, z \ge 0\}
$$

なお、

$$
\int_0^{\pi/2} \sin^n x dx = \int_0^{\pi/2} \cos^n x dx = \begin{cases}
    \displaystyle \frac{(n-1)(n-3)\cdots 3\cdot 1}{n(n-2) \cdots 4 \cdot 2} \cdot \frac{\pi}{2} &(n \geq 2 \text{ and } n \text{ is even}) \\
    \displaystyle \frac{(n-1)(n-3)\cdots 4\cdot 2}{n(n-2) \cdots 5 \cdot 3} \cdot \frac{\pi}{2} &(n \geq 3 \text{ and } n \text{ is odd}) \\
\end{cases}
$$

である。

(a) $V$ を平面 $z = k$ により切断したときの断面を $S$ とする。$S$ の式を $x = r\cos^3 t, y=r\sin^3 t$ で変数変換するとき、$r$ と $t$ の取りうる値の範囲を求めよ。

(b) $S$ の面積を求めよ。

(c) $V$ 体積を求めよ。

## **Kai**
### \[1\]
#### (a)
设 $u_1 = x, u_2 = \frac{dx}{dt}, u_3 = \frac{d^2x}{dt^2}$。
对 $\bm{u}$ 的各分量求导：

$$
\begin{aligned}
\frac{du_1}{dt} &= \frac{dx}{dt} = u_2 \\
\frac{du_2}{dt} &= \frac{d^2x}{dt^2} = u_3 \\
\frac{du_3}{dt} &= \frac{d^3x}{dt^3}
\end{aligned}
$$

由微分方程 (1) 移项得 $\frac{d^3x}{dt^3} = 3\frac{d^2x}{dt^2} + 6\frac{dx}{dt} - 8x$，代入 $u_1, u_2, u_3$：

$$
\frac{du_3}{dt} = -8u_1 + 6u_2 + 3u_3
$$

写成矩阵形式：

$$
\frac{d}{dt} \begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix} = 
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
-8 & 6 & 3 
\end{pmatrix} 
\begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix}
$$

因此，矩阵 $\bm{A}$ 为：

$$
\bm{A} = \begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
-8 & 6 & 3 
\end{pmatrix}
$$

#### (b)
计算特征多项式 $|\lambda \bm{I} - \bm{A}|$：

$$
\begin{aligned}
|\lambda \bm{I} - \bm{A}| &= \begin{vmatrix} \lambda & -1 & 0 \\ 0 & \lambda & -1 \\ 8 & -6 & \lambda - 3 \end{vmatrix} \\
&= \lambda \begin{vmatrix} \lambda & -1 \\ -6 & \lambda - 3 \end{vmatrix} - (-1) \begin{vmatrix} 0 & -1 \\ 8 & \lambda - 3 \end{vmatrix} \\
&= \lambda [\lambda(\lambda - 3) - 6] + [0 - (-8)] \\
&= \lambda^3 - 3\lambda^2 - 6\lambda + 8
\end{aligned}
$$

令 $\lambda^3 - 3\lambda^2 - 6\lambda + 8 = 0$。
观察可知 $\lambda = 1$ 是方程的一个根（$1 - 3 - 6 + 8 = 0$）。
利用多项式除法分解因式：

$$
(\lambda - 1)(\lambda^2 - 2\lambda - 8) = 0
$$

进一步分解二次项：

$$
(\lambda - 1)(\lambda - 4)(\lambda + 2) = 0
$$

解得特征值为：

$$
\lambda = 1, 4, -2
$$

#### (c)
由 (b) 可知，特征方程的根为互不相同的实数 $1, 4, -2$。
因此，微分方程的通解为：

$$
x(t) = C_1 e^t + C_2 e^{4t} + C_3 e^{-2t}
$$

其中 $C_1, C_2, C_3$ 为任意常数。

### \[2\]
#### (a)
将 $a_1, a_2$ 转换为极坐标形式：

$$
a_1 = 2\left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) = 2e^{i\frac{\pi}{6}}
$$

$$
a_2 = 2(0 + i) = 2e^{i\frac{\pi}{2}}
$$

计算商：

$$
\frac{a_1}{a_2} = \frac{2e^{i\frac{\pi}{6}}}{2e^{i\frac{\pi}{2}}} = 1 \cdot e^{i(\frac{\pi}{6} - \frac{\pi}{2})} = e^{-i\frac{\pi}{3}}
$$

因此：
- 绝对值：$\left|\frac{a_1}{a_2}\right| = 1$
- 偏角：$\arg\left(\frac{a_1}{a_2}\right) = -\frac{\pi}{3}$

#### (b)
若 $z_1, z_2, z_3$ 构成正三角形，则向量 $z_3 - z_1$ 可由 $z_2 - z_1$ 旋转 $\pm 60^\circ$ 得到。即：

$$
\frac{z_3 - z_1}{z_2 - z_1} = e^{\pm i\frac{\pi}{3}}
$$

令 $\omega = e^{\pm i\frac{\pi}{3}}$。注意到 $\omega$ 是方程 $t^2 - t + 1 = 0$ 的两个根（$\frac{1 \pm i\sqrt{3}}{2}$）。
因此，我们有关系式：

$$
\left(\frac{z_3 - z_1}{z_2 - z_1}\right)^2 - \left(\frac{z_3 - z_1}{z_2 - z_1}\right) + 1 = 0
$$

两边同乘 $(z_2 - z_1)^2$ 去分母：

$$
(z_3 - z_1)^2 - (z_3 - z_1)(z_2 - z_1) + (z_2 - z_1)^2 = 0
$$

展开各项：

$$
\begin{aligned}
(z_3^2 - 2z_3z_1 + z_1^2) - (z_3z_2 - z_3z_1 - z_1z_2 + z_1^2) + (z_2^2 - 2z_2z_1 + z_1^2) &= 0 \\
z_3^2 - 2z_3z_1 + z_1^2 - z_3z_2 + z_3z_1 + z_1z_2 - z_1^2 + z_2^2 - 2z_1z_2 + z_1^2 &= 0
\end{aligned}
$$

合并同类项：

- 平方项系数：$z_1^2 (1-1+1) = z_1^2$，同理得 $z_2^2, z_3^2$。
- 交叉项系数：$z_1z_2 (1-2) = -z_1z_2$，$z_2z_3 (-1) = -z_2z_3$，$z_3z_1 (-2+1) = -z_3z_1$。

整理得：

$$
z_1^2 + z_2^2 + z_3^2 - z_1z_2 - z_2z_3 - z_3z_1 = 0
$$

证毕。

### \[3\]
#### (a)
截面 $S$ 满足 $z=k$，代入不等式得：

$$
x^{\frac{2}{3}} + y^{\frac{2}{3}} \le 1 - k^{\frac{2}{3}} \quad (0 \le k \le 1)
$$

代入变换 $x = r \cos^3 t, y = r \sin^3 t$：

$$
(r \cos^3 t)^{\frac{2}{3}} + (r \sin^3 t)^{\frac{2}{3}} = r^{\frac{2}{3}}(\cos^2 t + \sin^2 t) = r^{\frac{2}{3}}
$$

于是有 $r^{\frac{2}{3}} \le 1 - k^{\frac{2}{3}} \implies r \le (1 - k^{\frac{2}{3}})^{\frac{3}{2}}$。
又因为 $x, y \ge 0$，所以 $\cos^3 t \ge 0, \sin^3 t \ge 0$，故 $t$ 在第一象限。
范围为：

$$
0 \le r \le \left(1 - k^{\frac{2}{3}}\right)^{\frac{3}{2}}, \quad 0 \le t \le \frac{\pi}{2}
$$

#### (b)
计算坐标变换的雅可比行列式 $J$：

$$
\begin{aligned}
J = \det \frac{\partial(x, y)}{\partial(r, t)} &= \begin{vmatrix} \cos^3 t & -3r \cos^2 t \sin t \\ \sin^3 t & 3r \sin^2 t \cos t \end{vmatrix} \\
&= 3r \sin^2 t \cos^4 t + 3r \cos^2 t \sin^4 t \\
&= 3r \sin^2 t \cos^2 t (\cos^2 t + \sin^2 t) = 3r \sin^2 t \cos^2 t
\end{aligned}
$$

面积积分 $S(k)$：

$$
S(k) = \int_0^{\frac{\pi}{2}} \int_0^{(1 - k^{\frac{2}{3}})^{\frac{3}{2}}} 3r \sin^2 t \cos^2 t \, dr \, dt
$$

先对 $r$ 积分：

$$
\int_0^{(1 - k^{\frac{2}{3}})^{\frac{3}{2}}} 3r \, dr = \frac{3}{2} \left[ (1 - k^{\frac{2}{3}})^{\frac{3}{2}} \right]^2 = \frac{3}{2} (1 - k^{\frac{2}{3}})^3
$$

再对 $t$ 积分（利用倍角公式 $\sin^2 t \cos^2 t = \frac{1}{4}\sin^2 2t$）：

$$
\int_0^{\frac{\pi}{2}} \sin^2 t \cos^2 t \, dt = \frac{1}{4} \int_0^{\frac{\pi}{2}} \sin^2 2t \, dt = \frac{1}{8} \int_0^{\pi} \sin^2 u \, du = \frac{1}{8} \cdot \frac{\pi}{2} = \frac{\pi}{16}
$$

于是截面面积为：

$$
S(k) = \frac{3\pi}{32} \left(1 - k^{\frac{2}{3}}\right)^3
$$

#### (c)
体积 $V$ 为截面面积沿 $z$ 轴的积分：

$$
V = \int_0^1 S(k) \, dk = \frac{3\pi}{32} \int_0^1 (1 - k^{\frac{2}{3}})^3 \, dk
$$

利用题目给出的 Wallis 公式提示，作代换 $k = \sin^3 u$。
则 $dk = 3\sin^2 u \cos u \, du$。当 $k: 0 \to 1$ 时，$u: 0 \to \frac{\pi}{2}$。
且 $(1 - k^{\frac{2}{3}}) = (1 - \sin^2 u) = \cos^2 u$。
代入积分：

$$
\begin{aligned}
I &= \int_0^{\frac{\pi}{2}} (\cos^2 u)^3 \cdot 3\sin^2 u \cos u \, du \\
&= 3 \int_0^{\frac{\pi}{2}} \cos^7 u \sin^2 u \, du \\
&= 3 \int_0^{\frac{\pi}{2}} \cos^7 u (1 - \cos^2 u) \, du \\
&= 3 \left( \int_0^{\frac{\pi}{2}} \cos^7 u \, du - \int_0^{\frac{\pi}{2}} \cos^9 u \, du \right)
\end{aligned}
$$

记 $J_n = \int_0^{\frac{\pi}{2}} \cos^n u \, du$。根据 Wallis 公式：

$$
J_7 = \frac{6}{7} \cdot \frac{4}{5} \cdot \frac{2}{3} \cdot 1 = \frac{16}{35}
$$

$$
J_9 = \frac{8}{9} J_7
$$

代入计算：

$$
I = 3 \left( J_7 - \frac{8}{9}J_7 \right) = 3 \cdot \frac{1}{9} J_7 = \frac{1}{3} \cdot \frac{16}{35} = \frac{16}{105}
$$

最终体积为：

$$
V = \frac{3\pi}{32} \cdot \frac{16}{105} = \frac{3\pi}{2} \cdot \frac{1}{105} = \frac{\pi}{2 \cdot 35} = \frac{\pi}{70}
$$
