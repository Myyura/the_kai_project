---
sidebar_label: "2020年8月実施 必須問題（物理学基礎）問2"
tags:
  - University-of-Electro-Communications
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Electrostatic-Shielding
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 必須問題（物理学基礎）問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の問いに答えよ。

(1) 図1に示すように，真空中（誘電率 $\varepsilon_0$）に点電荷 $q$ を取り囲む任意の閉曲面 $S$ がある。閉曲面 $S$ 上の微小面 $dS$ での電場ベクトルを $\boldsymbol E$，法線単位ベクトルを $\boldsymbol n$ とする。このとき内積 $\boldsymbol E\cdot\boldsymbol n\,dS$ を立体角 $d\Omega$ で表わし，閉曲面 $S$ 上にわたって積分することで，ガウスの法則(a)が成り立つことを示せ。なお電荷 $q$ から距離 $r$ にある微小面 $dS$ を見込む立体角 $d\Omega$ は $d\Omega=(\boldsymbol r\cdot\boldsymbol n)dS/r^3$ で定義される。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_2_fig1.png)

(2) 図2に示すように真空中で，半径 $a$ の導体球を，内半径 $b$，外半径 $c$ の導体球殻で同心状に包み，導体球殻に電荷を与えず導体球にのみ電荷 $Q$ を与えた。このとき導体球表面の点 $A$ と導体球殻内表面の点 $B$ 間において任意の経路 $C$ を考える。経路 $C$ 上の微小ベクトル $d\boldsymbol s$ を球座標系での単位ベクトル $(\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_\varphi)$ を用いて表せ。また，内積 $\boldsymbol E\cdot d\boldsymbol s$ を $\boldsymbol e_r$ 方向の微小長 $dr$ を用いて表せ。次に，点 $B$ を基準とした点 $A$ の電位 $V$ を求めよ。

![図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_2_fig2.png)

(3) 図3に示す導体球殻内の球面 $S_1$ にガウスの法則(a)を適用し，導体球殻の内面に誘導される電荷 $Q_1$ を求めよ。

![図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_2_fig3.png)

(4) 次に，図4に示す導体球殻の内表面にまたがる微小円柱 $S_2$（円柱の底面の面積 $dS$）にガウスの法則(a)を適用し，導体球殻の内面に誘導される電荷の面密度 $\omega$ を求めよ。また電荷 $Q_1$ を求めよ。

![図4](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_2_fig4.png)

(5) 以上より，導体球殻の外部（$c<r$）の電場ベクトル $\boldsymbol E$ を求め，$r=\infty$ を基準として点 $A$ の電位を求めよ。

(6) 一方，導体球には電荷を与えず導体球殻にのみ電荷 $Q$ を与えた。このときの，$r=\infty$ を基準として点 $A$ の電位を求めよ。

$$
\int_S\boldsymbol E\cdot\boldsymbol n\,dS=\frac{q}{\varepsilon_0}
\tag{a}
$$

(a)：ガウスの法則。

#### 题目描述

回答下列问题。

(1) 如图1，在真空中（介电常数为 $\varepsilon_0$），有包围点电荷 $q$ 的任意闭曲面 $S$。设闭曲面 $S$ 上微小面元 $dS$ 处的电场矢量为 $\boldsymbol E$，单位法向量为 $\boldsymbol n$。用立体角 $d\Omega$ 表示内积 $\boldsymbol E\cdot\boldsymbol n\,dS$，再对整个闭曲面 $S$ 积分，证明高斯定律(a)成立。从电荷 $q$ 处看距离为 $r$ 的微小面元 $dS$ 所张的立体角定义为 $d\Omega=(\boldsymbol r\cdot\boldsymbol n)dS/r^3$。

(2) 如图2，在真空中，以内半径 $b$、外半径 $c$ 的导体球壳同心包围半径 $a$ 的导体球。不给球壳电荷，仅给导体球电荷 $Q$。考虑导体球表面的点 $A$ 与球壳内表面的点 $B$ 之间的任意路径 $C$。用球坐标系中的单位向量 $(\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_\varphi)$ 表示路径上的微小位移矢量 $d\boldsymbol s$，并用 $\boldsymbol e_r$ 方向的微小长度 $dr$ 表示内积 $\boldsymbol E\cdot d\boldsymbol s$。然后求以 $B$ 点为基准的 $A$ 点电势 $V$。

(3) 对图3所示位于导体球壳内的球面 $S_1$ 应用高斯定律(a)，求球壳内表面感应的电荷 $Q_1$。

(4) 再对图4所示跨越导体球壳内表面的微小圆柱 $S_2$（圆柱底面积为 $dS$）应用高斯定律(a)，求球壳内表面感应电荷的面密度 $\omega$，并求电荷 $Q_1$。

(5) 根据以上结果，求球壳外部（$c<r$）的电场矢量 $\boldsymbol E$，以及以 $r=\infty$ 为基准的 $A$ 点电势。

(6) 另一方面，不给导体球电荷，仅给球壳电荷 $Q$。求此时以 $r=\infty$ 为基准的 $A$ 点电势。

高斯定律(a)为 $\displaystyle\int_S\boldsymbol E\cdot\boldsymbol n\,dS=q/\varepsilon_0$。

## **Kai**

### (1)

クーロンの法則 $\mathbf E=q\mathbf r/(4\pi\varepsilon_0r^3)$ より

$$
\mathbf E\cdot\mathbf n\,dS=\frac{q}{4\pi\varepsilon_0}d\Omega.
$$

閉曲面が電荷を囲むとき、有向立体角の積分は $4\pi$。したがって $\boxed{\oint_S\mathbf E\cdot\mathbf n\,dS=q/\varepsilon_0}$。

### (2)

$$
d\mathbf s=dr\,\mathbf e_r+r\,d\theta\,\mathbf e_\theta+r\sin\theta\,d\varphi\,\mathbf e_\varphi.
$$

球対称性とガウスの法則から、$a<r<b$ では $\mathbf E=Q\mathbf e_r/(4\pi\varepsilon_0r^2)$。したがって $\mathbf E\cdot d\mathbf s=Q\,dr/(4\pi\varepsilon_0r^2)$、

$$
\boxed{\begin{gathered}
V_A-V_B=-\int_b^a\frac{Q}{4\pi\varepsilon_0r^2}dr\\
=\frac{Q}{4\pi\varepsilon_0}\left(\frac1a-\frac1b\right)
\end{gathered}}.
$$

### (3), (4)

導体内部の電場は0なので、$S_1$ の内部電荷も0。よって $\boxed{Q_1=-Q}$。

微小円柱の空洞側の底面法線は $-\mathbf e_r$、導体側の電場は0である。側面の寄与を高さとともに0にすると

$$
\begin{gathered}
-E(b)dS=\frac{\omega dS}{\varepsilon_0},\\
\boxed{\omega=-\frac{Q}{4\pi b^2}},\\
\boxed{Q_1=4\pi b^2\omega=-Q}.
\end{gathered}
$$

### (5)

中性の球殻の外面には $+Q$ が誘導される。全電荷は $Q$ であるから

$$
\boxed{\mathbf E(r)=\frac{Q}{4\pi\varepsilon_0r^2}\mathbf e_r\quad(r>c)}.
$$

球殻は等電位で $V_B=V(c)=Q/(4\pi\varepsilon_0c)$。したがって

$$
\boxed{V_A=\frac{Q}{4\pi\varepsilon_0}\left(\frac1a-\frac1b+\frac1c\right)}.
$$

### (6)

内球の電荷が0なので球殻内面の電荷も0であり、$Q$ はすべて外面に分布する。空洞内の電場は0、内球と球殻は等電位となるため

$$
\boxed{V_A=\frac{Q}{4\pi\varepsilon_0c}}.
$$

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 7–8ページ](https://web.archive.org/web/20241224120234id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202008.pdf)
