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

1. 如图 1，在点 \(C\) 建立相机正交坐标系 \(\Sigma_C\)，镜头轴为 \(CZ\)，投影平面 \(S\) 与 \(CZ\) 正交且距 \(C\) 为 \(f\)。空间点 \(Q\) 投影到 \(S\) 上的点 \(P\)，其相机坐标为 \(\mathbf P_C=(P_X,P_Y,f)^t\)。在世界坐标系 \(\Sigma_W\) 中，相机三轴方向向量分别为
   \[
   \mathbf X_W=(X_X,X_Y,X_Z)^t,\quad
   \mathbf Y_W=(Y_X,Y_Y,Y_Z)^t,\quad
   \mathbf Z_W=(Z_X,Z_Y,Z_Z)^t,
   \]
   光心位置为 \(\mathbf C_W=(C_X,C_Y,C_Z)^t\)，上标 \(t\) 表示转置。若 \(C\) 到 \(Q\) 的距离为 \(d\)，用 \(\mathbf P_C,d\) 表示从 \(C\) 指向 \(Q\) 的向量 \(\mathbf Q_C\)。又已知
   \[
   \mathbf Q_W=R_C\mathbf Q_C+\mathbf C_W,
   \]
   写出旋转矩阵 \(R_C\) 的各元素。
2. 相机位于 \(A\) 时，\(Q\) 的投影为 \(\mathbf P_A=(a_X,a_Y,f)^t\)。随后相机沿 \(X\) 轴平移距离 \(\ell\) 到 \(B\)，再绕平移后坐标系的 \(Y\) 轴旋转角 \(\alpha\)，得到坐标系 \(\Sigma_B\)，投影为 \(\mathbf P_B=(b_X,b_Y,f)^t\)。在观测到 \(\mathbf P_A=\mathbf P_B\) 时，说明如何求 \(A,Q\) 间距离 \(d_A\) 和 \(B,Q\) 间距离 \(d_B\)。假设平移、旋转无误差，且 \(\Sigma_A,\Sigma_B\) 的 \(XZ\) 平面共面。
3. 两台相机分别位于 \(M,N\)，世界坐标位置为 \(\mathbf M_W,\mathbf N_W\)，旋转矩阵为 \(R_M,R_N\)，对 \(Q\) 的投影为 \(\mathbf P_M,\mathbf P_N\)。因为由两台相机得到的 \(Q\) 的世界坐标应相同，写出 \(\mathbf P_M,\mathbf P_N\) 必须满足的条件。
4. 若投影点以数组给出且不严格满足第 3 问条件，定义
   \[
   J=\left|(R_M\mathbf Q_M+\mathbf M_W)-(R_N\mathbf Q_N+\mathbf N_W)\right|^2.
   \]
   通过最小化 \(J\) 求 \(\mathbf Q_W\)。设最小时从 \(M,N\) 到 \(Q\) 的距离分别为 \(d_M,d_N\)，求 \(d_M,d_N\)，并说明如何由二者得到世界坐标系中的 \(\mathbf Q_W\)。
5. 说明用第 3 问所述双目相机测量三维位置时，为减小误差应如何布置两台相机。

#### 考点

- **相机投影与坐标变换**：由图像平面射线、深度和相机姿态在相机坐标与世界坐标间转换三维点。
- **双目三角测量**：利用两个视点的投影射线与已知基线、旋转求空间距离和三维位置。
- **带误差射线的最小二乘重建**：最小化两条空间射线间的点差，求各射线尺度并融合世界坐标估计。
- **双目几何布置**：从基线长度、视线夹角和三角测量条件数分析降低深度误差的相机配置。

