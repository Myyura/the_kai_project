---
sidebar_label: '2006年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Engineering.Robotics.Forward-and-Inverse-Kinematics-of-Serial-Manipulator
  - Engineering.Robotics.Manipulator-Jacobian-and-End-Effector-Velocity
  - Engineering.Robotics.Jacobian-Transpose-Joint-Torque
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2006年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065647id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2006_8_ci_istmajor_all.pdf)。

### 日本語

図 $1$ に示すように，$3$ 点 $\mathrm{O, S, E}$ のそれぞれに回転軸をもつ $3$ 関節アームがある．点 $\mathrm{O}$ の関節は図の $XYZ$ 座標軸の $Z$ 軸回りに回転する．点 $\mathrm{S, E}$ のそれぞれの関節は，面 $\mathrm{OSEW}$ に垂直な軸方向に回転する．$\overline{\mathrm{OS}}=l_0, \overline{\mathrm{SE}}=l_1, \overline{\mathrm{EW}}=l_2$ として，以下の問いに答えよ．

(1) 点 $\mathrm{W}$ の座標を $\vec{W}(w_x, w_y, w_z)$ とし，$3$ つの関節 $\mathrm{O, S, E}$ の軸回りの回転角ベクトルを $\vec{\theta}(\theta_0, \theta_1, \theta_2)$ として順運動学計算式 $\vec{W}=f(\vec{\theta})$ を求めよ．

(2) 点 $\mathrm{W}$ の速度 $\vec{V}(\dot{w}_x, \dot{w}_y, \dot{w}_z)$ を $3$ つの関節 $\mathrm{O, S, E}$ の軸回りの角速度ベクトル $\vec{\Omega}(\dot{\theta}_0, \dot{\theta}_1, \dot{\theta}_2)$ で表せ．

(3) 逆運動学計算式 $\vec{\theta}=f^{-1}(\vec{W})$ を求めよ．

(4) アームの先端 $\mathrm{W}$ に，力 $\vec{F}(F_x, F_y, F_z)$ が加わる場合に，アームの姿勢を保持するために，$3$ つの関節 $\mathrm{O, S, E}$ の各軸回りに必要な関節トルク $\vec{\tau}(\tau_0, \tau_1, \tau_2)$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_3_p1.png" width="600" alt=""/>
  <br>図1
</figure>

### English
Figure 1 shows an arm which has three joints at O, S and E. The axis of the joint O rotates around $Z$ axis of $XYZ$ coordinates. The axes of joints S and E are vertical to the plane OSEW. Let $\overline{OS}=l_0, \overline{SE}=l_1, \overline{EW}=l_2$. Answer the following questions.

(1) Show the equation of the forward kinematics of the arm $\vec{W}=f(\vec{\theta})$, where $\vec{W}(w_x,w_y,w_z)$ is the position vector of W and $\vec{\theta}(\theta_0,\theta_1,\theta_2)$ is the vector of the rotation angles around the joints O, S and E.

(2) Describe the velocity $\vec{V}(\dot{w}_x,\dot{w}_y,\dot{w}_z)$ of the point W by the angular velocity $\vec{\Omega}(\dot{\theta}_0,\dot{\theta}_1,\dot{\theta}_2)$ of the three joints O, S and E.

(3) Show the equation of the inverse kinematics of the arm $\vec{\theta}=f^{-1}(\vec{W})$.

(4) Assume a force $\vec{F}(F_x,F_y,F_z)$ is applied to the point W. Show the joint torque $\vec{\tau}(\tau_0,\tau_1,\tau_2)$ around the three joints O, S and E in order to keep the posture of the arm.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_3_p1.png" width="600" alt=""/>
  <br>Figure 1
</figure>

### 题目描述

如图 1，有一条在 $O,S,E$ 三点各设转轴的三关节机械臂。关节 $O$ 绕图示 $XYZ$ 坐标系的 $Z$ 轴旋转；关节 $S,E$ 的转轴均垂直于平面 $OSEW$。已知

$$
\overline{OS}=l_0,\qquad \overline{SE}=l_1,\qquad \overline{EW}=l_2.
$$

回答下列问题。

1. 令末端点 $W$ 的位置向量为 $\vec W=(w_x,w_y,w_z)$，三个关节 $O,S,E$ 的转角向量为 $\vec\theta=(\theta_0,\theta_1,\theta_2)$。求机械臂的正运动学公式 $\vec W=f(\vec\theta)$。
2. 用三个关节的角速度向量 $\vec\Omega=(\dot\theta_0,\dot\theta_1,\dot\theta_2)$ 表示点 $W$ 的速度 $\vec V=(\dot w_x,\dot w_y,\dot w_z)$。
3. 求逆运动学公式 $\vec\theta=f^{-1}(\vec W)$。
4. 若末端 $W$ 受到力 $\vec F=(F_x,F_y,F_z)$，求为了保持机械臂当前姿态，三个关节轴所需施加的关节力矩 $\vec\tau=(\tau_0,\tau_1,\tau_2)$。

题目所用机械臂几何结构沿用原文图 1。


## **Kai**

図の向きに従い、$\theta_0$ は $X$ 軸から水平半径方向への角、$\theta_1$ は水平から $SE$ への仰角とする。$\theta_2$ は $EW$ から $SE$ の延長へ測った角なので、$EW$ の仰角は **$\theta_1-\theta_2$** である。以下ではリンク長 $l_1,l_2>0$ とし、関節の可動域制限・重力・摩擦は考えない。

### (1)

$$
\phi=\theta_1-\theta_2,\qquad
r=l_1\cos\theta_1+l_2\cos\phi,\qquad
h=l_1\sin\theta_1+l_2\sin\phi
$$

とおけば、各リンクの水平・鉛直成分を加えることにより、

$$
\boxed{\vec W=
\begin{pmatrix}r\cos\theta_0\\r\sin\theta_0\\l_0+h\end{pmatrix}}.
$$

$r$ は符号をもつ水平成分であり、常に非負とは限らない。

### (2)

(1)を時間微分すると $\vec V=J\vec\Omega$ となる。ただし、

$$
\boxed{J=\frac{\partial\vec W}{\partial\vec\theta}=
\begin{pmatrix}
-r\sin\theta_0&-h\cos\theta_0&l_2\sin\phi\cos\theta_0\\
 r\cos\theta_0&-h\sin\theta_0&l_2\sin\phi\sin\theta_0\\
0&r&-l_2\cos\phi
\end{pmatrix}}.
$$

例えば第3列の符号は $\partial\phi/\partial\theta_2=-1$ による。

### (3)

$\rho=\sqrt{w_x^2+w_y^2}$, $h=w_z-l_0$ とおく。余弦定理より、

$$D=\frac{\rho^2+h^2-l_1^2-l_2^2}{2l_1l_2}=\cos\theta_2.$$

よって到達可能条件は $|D|\le1$、すなわち

$$|l_1-l_2|\le\sqrt{\rho^2+h^2}\le l_1+l_2$$

である。まず $\rho>0$ の場合、$\sigma\in\{1,-1\}$ に対して

$$
r=\sigma\rho,\qquad
\theta_0=\operatorname{atan2}(w_y,w_x)+\frac{1-\sigma}{2}\pi
$$

を選ぶ。さらに肘の2解を

$$\boxed{\theta_2=\operatorname{atan2}\!\left(\varepsilon\sqrt{1-D^2},D\right),\quad\varepsilon\in\{1,-1\}}$$

とし、

$$
\boxed{\theta_1=\operatorname{atan2}(h,r)+
\operatorname{atan2}(l_2\sin\theta_2,l_1+l_2\cos\theta_2)}
$$

を得る。これは

$$r+ih=e^{i\theta_1}(l_1+l_2e^{-i\theta_2})$$

の偏角を取った式である。角度には $2\pi$ の整数倍を加えられ、実際の関節制限があれば適合する解を選ぶ。図のように $r\ge0$ の配置に限れば $\sigma=1$ を使う。

$\rho=0$ では $\theta_0$ は任意で、平面内の式に $r=0$ を代入する。ただし $\rho=h=0$ かつ $l_1=l_2$ の完全折り畳みでは、$\theta_2=\pi\pmod{2\pi}$、$\theta_1,\theta_0$ は任意であり、$\operatorname{atan2}(0,0)$ を用いてはならない。したがって逆運動学は一般に一価の関数ではない。

### (4)

$\vec F$ は「アームが外部から受ける力」である。任意の仮想変位 $\delta\vec\theta$ に対する静的つり合いは

$$
\vec\tau^{\mathsf T}\delta\vec\theta+
\vec F^{\mathsf T}\delta\vec W=0,\qquad
\delta\vec W=J\delta\vec\theta
$$

なので、保持のためにアクチュエータが与えるトルクは

$$\boxed{\vec\tau=-J^{\mathsf T}\vec F}.$$

$F_r=F_x\cos\theta_0+F_y\sin\theta_0$ とおくと、具体的には

$$
\boxed{\begin{aligned}
\tau_0&=r(F_x\sin\theta_0-F_y\cos\theta_0),\\
\tau_1&=hF_r-rF_z,\\
\tau_2&=-l_2\sin\phi\,F_r+l_2\cos\phi\,F_z.
\end{aligned}}
$$

なお $J^{\mathsf T}\vec F$ は外力が関節に与える一般化力であり、その反対符号が保持トルクである。アーム自身の重力も含めるなら、各リンクの質量・重心位置から求める重力補償トルクをさらに加える。
