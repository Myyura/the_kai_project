---
sidebar_label: "2018年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Gyroscopic-Precession
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
---

# 九州大学 工学府 機械系専攻 2018年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、摩擦のない水平面の上に半径 $R$、質量 $m$ で厚さの無視できる 2 個の均質な円板 A および B と、それらの中心に対して垂直かつ剛に取り付けられた質量の無視できる長さ $d$ の軸からなる剛体がある。剛体は常に両円板が水平面と接触した状態で軸のまわりを一定角速度 $\alpha$ で回転しており、さらに重心 G を含む鉛直軸のまわりを一定角速度 $\beta$ で回転している。重心 G を原点として円板 B の中心を通る水平方向に $z$ 軸、鉛直上向きに $x$ 軸、これらと直交する水平方向に $y$ 軸を設定した直交座標系 G–$xyz$ を考える（座標系 G–$xyz$ は $x$ 軸まわりを角速度 $\beta$ で回転している）。重力加速度を $g$ として、以下の問いに答えよ。ただし、ベクトルおよびテンソルはすべて G–$xyz$ 座標系の各軸方向の成分を用いて解答すること（必要であれば、各軸方向の単位ベクトルを $\boldsymbol e_x,\boldsymbol e_y,\boldsymbol e_z$ としてよい）。（50点）

**(1)** G–$xyz$ 座標系の回転を表す角速度ベクトル $\boldsymbol\Omega$ を求めよ。さらに、剛体の回転を表す角速度ベクトル $\boldsymbol\omega$ を求めよ。

**(2)** 重心 G に関する剛体の慣性テンソルは定数 $I$ および $J$ を用いて $\boldsymbol I_G=\operatorname{diag}[I\ I\ J]$ と書ける（$\operatorname{diag}[\ ]$ は対角行列を表す）。平行軸の定理および薄板の直交軸の定理に注意して、$I$ および $J$ を求めよ。ただし、円板 1 個の $z$ 軸まわりの極慣性モーメントは $I_p=mR^2/2$ である。

**(3)** 重心 G に関する剛体の角運動量ベクトル $\boldsymbol L$ を求めよ。

**(4)** 重心 G まわりの回転に関する運動方程式を用いて、剛体に加わる $x,y,z$ 軸まわりの力のモーメント $M_x,M_y,M_z$ を求めよ。（ヒント：一般的な時変ベクトル $\boldsymbol P$ の静止座標系に対する時間微分は

$$
\frac{d\boldsymbol P}{dt}
=\frac{d^*\boldsymbol P}{dt}+\boldsymbol\Omega\times\boldsymbol P
$$

で表される。ただし、$d^*\boldsymbol P/dt$ は回転座標系 G–$xyz$ 上で観測されるベクトル $\boldsymbol P$ の時間微分を表す。）

**(5)** 水平面から円板 A および B に作用する垂直抗力 $N_A$ および $N_B$ を求めよ（上向きを正とする）。

![二円板と回転座標系の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_dynamics-1-original.png)

#### 题目描述

如图，无摩擦水平面上有一个刚体，由两个半径为 $R$、质量为 $m$、厚度可忽略的均质圆盘 A、B，以及垂直、刚性连接于两盘中心之间的无质量长 $d$ 轴组成。两圆盘始终与水平面接触，刚体绕连接轴以恒定角速度 $\alpha$ 转动，同时绕通过重心 G 的竖直轴以恒定角速度 $\beta$ 转动。建立以 G 为原点的正交坐标系 G–$xyz$：$z$ 轴水平并通过 B 中心，$x$ 轴竖直向上，$y$ 轴水平且与另外两轴垂直。该坐标系绕 $x$ 轴以角速度 $\beta$ 转动。重力加速度为 $g$。所有向量和张量均须用 G–$xyz$ 各轴方向的分量作答；需要时，可用 $\boldsymbol e_x,\boldsymbol e_y,\boldsymbol e_z$ 表示各轴的单位向量。（50分）

**(1)** 求表示 G–$xyz$ 坐标系转动的角速度向量 $\boldsymbol\Omega$，并求刚体的角速度向量 $\boldsymbol\omega$。

**(2)** 刚体关于 G 的惯性张量可用常数 $I,J$ 写成 $\boldsymbol I_G=\operatorname{diag}[I\ I\ J]$，其中 $\operatorname{diag}[\ ]$ 表示对角矩阵。注意使用平行轴定理和薄板的垂直轴定理，求 $I,J$。单个圆盘绕 $z$ 轴的极转动惯量为 $I_p=mR^2/2$。

**(3)** 求刚体关于 G 的角动量向量 $\boldsymbol L$。

**(4)** 利用刚体绕 G 转动的运动方程，求作用于刚体、分别绕 $x,y,z$ 轴的力矩 $M_x,M_y,M_z$。（提示：一般时变向量 $\boldsymbol P$ 相对静止坐标系的时间导数为

$$
\frac{d\boldsymbol P}{dt}
=\frac{d^*\boldsymbol P}{dt}+\boldsymbol\Omega\times\boldsymbol P.
$$

其中 $d^*\boldsymbol P/dt$ 是在旋转坐标系 G–$xyz$ 上观察到的 $\boldsymbol P$ 的时间导数。）

**(5)** 求水平面对圆盘 A、B 的法向反力 $N_A,N_B$，以向上为正。

## **Kai**

### (1)

$$
\boxed{\boldsymbol\Omega=\beta\boldsymbol e_x,\qquad
\boldsymbol\omega=\beta\boldsymbol e_x+\alpha\boldsymbol e_z.}
$$

### (2)

円板一個の直径まわりの慣性モーメントは $mR^2/4$ である。したがって

$$
\boxed{\begin{gathered}
I=2\left(\frac{mR^2}{4}+m\frac{d^2}{4}\right)
=\frac{m(R^2+d^2)}2,\\
J=2\frac{mR^2}{2}=mR^2.
\end{gathered}}
$$

### (3)

$$
\boxed{\begin{gathered}
\boldsymbol L=I_G\boldsymbol\omega\\
=\frac{m(R^2+d^2)}2\beta\boldsymbol e_x+mR^2\alpha\boldsymbol e_z.
\end{gathered}}
$$

### (4)

回転座標系で $\boldsymbol L$ の成分は一定なので、$d^*\boldsymbol L/dt=0$。よって

$$
\begin{gathered}
\boldsymbol M=\boldsymbol\Omega\times\boldsymbol L
=-mR^2\alpha\beta\boldsymbol e_y,\\
\boxed{M_x=M_z=0,\quad M_y=-mR^2\alpha\beta.}
\end{gathered}
$$

### (5)

重心の鉛直加速度はゼロであり、重力は G に関するモーメントをもたない。したがって

$$
\begin{gathered}
N_A+N_B=2mg,\\
\frac d2(N_B-N_A)=-mR^2\alpha\beta.
\end{gathered}
$$

これを解いて

$$
\boxed{\begin{gathered}
N_A=mg+\frac{mR^2\alpha\beta}{d},\\
N_B=mg-\frac{mR^2\alpha\beta}{d}.
\end{gathered}}
$$

両円板が接触し続けるという条件は $R^2|\alpha\beta|\le gd$ に対応する。
