---
sidebar_label: 2009年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Graphics.Projection-and-Reconstruction
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2009年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065627id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2009_8_ci_istmajor_ja.pdf)。
Answer the following questions.

(1) As Figure 1 shows, an orthogonal coordinate frame $\Sigma_C$ of a camera with the lens axis $CZ$ and the projection plane $S$ is placed at the point $C$. The plane $S$ is orthogonal to the lens axis $CZ$ and has the distance $f$ from $C$. The point $Q$ is projected to the point $P$ on the plane $S$ with the coordinates $\mathbf{P}_C=(P_X,P_Y,f)^t$ in $\Sigma_C$. The coordinates of three orientation vectors $CX,CY,CZ$ are described as $\mathbf{X}_\mathbf{W}=(X_X,X_Y,X_Z)^t$, $\mathbf{Y}_\mathbf{W}=(Y_X,Y_Y,Y_Z)^t$ and $\mathbf{Z}_\mathbf{W}=(Z_X,Z_Y,Z_Z)^t$, and the position vector of $C$ is $\mathbf{C}_\mathbf{W}=(C_X,C_Y,C_Z)^t$ in the coordinate frame $\Sigma_W$. The superscript $t$ indicates transpose.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_2_p1.png" width="600" alt=""/>
</figure>

Assume the distance from $C$ to $Q$ is $d$, show the vector $\mathbf{Q}_C$ from the point $C$ to the point $Q$ with $\mathbf{P}_C$ and $d$. When the vector $\mathbf{Q}_\mathbf{W}$ is the position vector of $Q$ and the rotation matrix of $\Sigma_C$ is $R_C$ in $\Sigma_W$, we have $\mathbf{Q}_\mathbf{W}=R_C\mathbf{Q}_C+\mathbf{C}_\mathbf{W}$. Show the elements of the rotation matrix $R_C$.

(2) When we observe the point $Q$ from the camera placed at a point $A$, the projection point is $\mathbf{P}_A=(a_X,a_Y,f)^t$ in the camera coordinate frame $\Sigma_A$. Then, we translate the camera with the distance $\ell$ along the axis $X$ to a point $B$ and rotate it around the axis $Y$ of the translated coordinate frame with the angle $\alpha$. The rotated camera coordinate frame is $\Sigma_B$. The projection point becomes $\mathbf{P}_B=(b_X,b_Y,f)^t$ in $\Sigma_B$. Show the method to get the distance $d_A$ from $A$ to $Q$ and the distance $d_B$ from $B$ to $Q$, when $\mathbf{P}_A=\mathbf{P}_B$ is obtained. Assume there is no error in the translation and rotation, and the $XZ$ planes of $\Sigma_A$ and $\Sigma_B$ are aligned in the same plane.

(3) Two cameras are placed at the points $M$ and $N$, respectively. Let the position vectors of $M$ and $N$ be $\mathbf{M}_\mathbf{W}$ and $\mathbf{N}_\mathbf{W}$ and the rotation matrices be $R_M$ and $R_N$. The projection points of $Q$ on these two cameras become $\mathbf{P}_M$ and $\mathbf{P}_N$. As the position vectors $\mathbf{Q}_\mathbf{M}$ and $\mathbf{Q}_\mathbf{N}$ of the point $Q$ are the same in the coordinate frame $\Sigma_W$. Denote the condition which the projection points $\mathbf{P}_M$ and $\mathbf{P}_N$ should satisfy.

(4) Assume the projection points are described in an array and the condition in (3) is not satisfied. Let the evaluation function be $J=|(R_M\mathbf{Q}_M+\mathbf{M}_\mathbf{W})-(R_N\mathbf{Q}_N+\mathbf{N}_\mathbf{W})|^2$, and consider minimizing $J$ to get $\mathbf{Q}_\mathbf{W}$. Let $d_M$ and $d_N$ be the distances from $M$ and $N$ to $Q$, respectively, when $J$ is minimized. Denote $d_M$ and $d_N$. Then explain the method to get $\mathbf{Q}_\mathbf{W}$ in $\Sigma_W$ with $d_M$, $d_N$.

(5) Explain the best arrangement to minimize errors when we measure a three dimensional position by two cameras such as (3).

### 题目描述

回答以下相机投影与三维重建问题。

1. 如图 1，在点 $C$ 建立相机正交坐标系 $\Sigma_C$，镜头轴为 $CZ$，投影平面 $S$ 与 $CZ$ 正交且距 $C$ 为 $f$。空间点 $Q$ 投影到 $S$ 上的点 $P$，其相机坐标为 $\mathbf P_C=(P_X,P_Y,f)^t$。在世界坐标系 $\Sigma_W$ 中，相机三轴方向向量分别为

   $$
   \mathbf X_W=(X_X,X_Y,X_Z)^t,\quad
   \mathbf Y_W=(Y_X,Y_Y,Y_Z)^t,\quad
   \mathbf Z_W=(Z_X,Z_Y,Z_Z)^t,
   $$

   光心位置为 $\mathbf C_W=(C_X,C_Y,C_Z)^t$，上标 $t$ 表示转置。若 $C$ 到 $Q$ 的距离为 $d$，用 $\mathbf P_C,d$ 表示从 $C$ 指向 $Q$ 的向量 $\mathbf Q_C$。又已知

   $$
   \mathbf Q_W=R_C\mathbf Q_C+\mathbf C_W,
   $$

   写出旋转矩阵 $R_C$ 的各元素。
2. 相机位于 $A$ 时，$Q$ 的投影为 $\mathbf P_A=(a_X,a_Y,f)^t$。随后相机沿 $X$ 轴平移距离 $\ell$ 到 $B$，再绕平移后坐标系的 $Y$ 轴旋转角 $\alpha$，得到坐标系 $\Sigma_B$，投影为 $\mathbf P_B=(b_X,b_Y,f)^t$。在观测到 $\mathbf P_A=\mathbf P_B$ 时，说明如何求 $A,Q$ 间距离 $d_A$ 和 $B,Q$ 间距离 $d_B$。假设平移、旋转无误差，且 $\Sigma_A,\Sigma_B$ 的 $XZ$ 平面共面。
3. 两台相机分别位于 $M,N$，世界坐标位置为 $\mathbf M_W,\mathbf N_W$，旋转矩阵为 $R_M,R_N$，对 $Q$ 的投影为 $\mathbf P_M,\mathbf P_N$。因为由两台相机得到的 $Q$ 的世界坐标应相同，写出 $\mathbf P_M,\mathbf P_N$ 必须满足的条件。
4. 若投影点以数组给出且不严格满足第 3 问条件，定义

   $$
   J=\left|(R_M\mathbf Q_M+\mathbf M_W)-(R_N\mathbf Q_N+\mathbf N_W)\right|^2.
   $$

   通过最小化 $J$ 求 $\mathbf Q_W$。设最小时从 $M,N$ 到 $Q$ 的距离分别为 $d_M,d_N$，求 $d_M,d_N$，并说明如何由二者得到世界坐标系中的 $\mathbf Q_W$。
5. 说明用第 3 问所述双目相机测量三维位置时，为减小误差应如何布置两台相机。



## **Kai**

$f>0$ とし、観測対象は両カメラの前方にあるとする。$\|\cdot\|$ はユークリッド長を表す。

### (1)

$C,Q,P$ は同一直線上にあり、$\|\mathbf Q_C\|=d$ だから、

$$
\boxed{\mathbf Q_C=d\frac{\mathbf P_C}{\|\mathbf P_C\|}
=\frac{d}{\sqrt{P_X^2+P_Y^2+f^2}}\begin{pmatrix}P_X\\P_Y\\f\end{pmatrix}}.
$$

カメラ座標の各単位軸を世界座標で表したベクトルを列に並べれば、

$$
\boxed{R_C=[\mathbf X_W\ \mathbf Y_W\ \mathbf Z_W]
=\begin{pmatrix}X_X&Y_X&Z_X\\X_Y&Y_Y&Z_Y\\X_Z&Y_Z&Z_Z\end{pmatrix}}.
$$

直交右手座標系なら $R_C^{\mathsf T}R_C=I$, $\det R_C=1$ である。

### (2)

$\Sigma_A$ を計算の基準とし、$A=0$, $B=\mathbf b=(\ell,0,0)^{\mathsf T}$ と置く。右手系の正の回転を採用すると、

$$R_y(\alpha)=\begin{pmatrix}\cos\alpha&0&\sin\alpha\\0&1&0\\-\sin\alpha&0&\cos\alpha\end{pmatrix}.$$

$\mathbf P=\mathbf P_A=\mathbf P_B$ に対し、$A$ 基準での2本の単位視線を

$$
\mathbf u=\frac{\mathbf P}{\|\mathbf P\|},\qquad
\mathbf v=R_y(\alpha)\frac{\mathbf P}{\|\mathbf P\|}
$$

とする。求める点は

$$d_A\mathbf u=\mathbf b+d_B\mathbf v$$

を満たす。$\gamma=\mathbf u^{\mathsf T}\mathbf v$, $a=\mathbf u^{\mathsf T}\mathbf b$, $b=\mathbf v^{\mathsf T}\mathbf b$ と略し、両視線との内積を取ると

$$d_A-\gamma d_B=a,\qquad \gamma d_A-d_B=b.$$

従って $|\gamma|<1$ なら

$$
\boxed{d_A=\frac{a-\gamma b}{1-\gamma^2},\qquad
d_B=\frac{\gamma a-b}{1-\gamma^2}}.
$$

これを元のベクトル式へ代入して整合性と $d_A,d_B>0$ を確認する。投影座標が等しくても、カメラが回転していれば世界での視線は異なるので三角測量できる。反対に、視線が平行・反平行なら分母が0となり、この観測だけでは距離を一意に復元できない。回転の符号を逆に定義する場合は $\alpha$ を $-\alpha$ に置き換える。

### (3)

世界座標での単位視線と基線を

$$
\mathbf u=R_M\frac{\mathbf P_M}{\|\mathbf P_M\|},\quad
\mathbf v=R_N\frac{\mathbf P_N}{\|\mathbf P_N\|},\quad
\mathbf b=\mathbf N_W-\mathbf M_W
$$

とする。正の距離 $d_M,d_N$ が存在して

$$\boxed{d_M\mathbf u-d_N\mathbf v=\mathbf b}$$

となることが条件である。非平行な視線について距離を消去すると、

$$\boxed{\mathbf b^{\mathsf T}(\mathbf u\times\mathbf v)=0}$$

という共面条件（エピポーラ条件）を得る。ただし、交点が前方にあるかは正の距離を別途確認する。平行な視線ではこの式は自動的に0になるため、それだけでは十分ではなく、$\mathbf b\times\mathbf u=0$ と半直線同士の重なりを調べる必要がある。

### (4)

$J=\|d_M\mathbf u-d_N\mathbf v-\mathbf b\|^2$ と書き、$\gamma=\mathbf u^{\mathsf T}\mathbf v$, $a=\mathbf u^{\mathsf T}\mathbf b$, $b=\mathbf v^{\mathsf T}\mathbf b$ とする。偏微分を0と置くと、

$$
\begin{pmatrix}1&-\gamma\\-\gamma&1\end{pmatrix}
\begin{pmatrix}d_M\\d_N\end{pmatrix}
=\begin{pmatrix}a\\-b\end{pmatrix}.
$$

$|\gamma|<1$ なら係数行列は正定値なので、この停留点が一意な最小点であり、

$$
\boxed{d_M=\frac{a-\gamma b}{1-\gamma^2},\qquad
d_N=\frac{\gamma a-b}{1-\gamma^2}}.
$$

最近点を $Q_M^*=\mathbf M_W+d_M\mathbf u$, $Q_N^*=\mathbf N_W+d_N\mathbf v$ とすると、その中点

$$\boxed{\widehat{\mathbf Q}_W=\frac{Q_M^*+Q_N^*}{2}}$$

を再構成点として採用する。これは2本の視線を対等に扱う最近点法である。視線が交わらない場合、$d_M,d_N$ は各視線上の最近点までのパラメータであり、中点までの厳密な距離とは一般に異なる。

観測誤差によって上の解に負の成分が出る場合、それを物理的な「距離」として使ってはならない。$d_M,d_N\ge0$ を課し、内部解が可行ならそれを使う。そうでなければ、境界候補

$$(d_M,d_N)=(\max(0,a),0),\qquad(0,\max(0,-b))$$

で $J$ を比較し、小さい方を選ぶ（原点が最適になる場合も0との最大値により扱える）。$|\gamma|=1$ は退化しており、一意な深度推定はできない。

### (5)

視線間の角度を $\theta$ とすると、上の逆行列の分母は $1-\gamma^2=\sin^2\theta$ である。ほぼ平行な視線では小さな画像誤差が大きな距離誤差へ増幅されるため、対象を共通視野に収めつつ十分な基線を設ける。対象までの距離や観測精度を同程度に固定して条件数を小さくする観点では、交差角が90度付近になる配置がよい。実際の最良配置は距離、焦点距離、画素誤差、遮蔽、対応点の見つけやすさによっても変わるため、角度だけで普遍的な最適解が決まるわけではない。両カメラの内部・外部パラメータの校正と同期も必要である。
