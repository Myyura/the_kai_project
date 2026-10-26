---
sidebar_label: "2019年8月実施 物理学 [II]"
tags:
  - Kyushu-University
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Conducting-Sphere-in-Uniform-Electric-Field
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Surface-Current-Boundary-Condition
---
# 九州大学 理学府 物理学専攻 2019年8月実施 物理学 \[II\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

以下，真空中の誘電率を $\varepsilon_0$，透磁率を $\mu_0$ とする。また，直交座標系 $(x,y,z)$ の単位ベクトルをそれぞれ $\boldsymbol e_x,\boldsymbol e_y,\boldsymbol e_z$，極座標系 $(r,\theta,\phi)$ の単位ベクトルをそれぞれ $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_\phi$ とする。

### [A-I]

真空中で原点から距離 $r$，$z$ 軸に対する極角 $\theta$ にある点 P を考える（図1）。

![図1 点電荷と点P](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_II_figure_1.png)

(1) 原点においた点電荷 $q$ が点 P に作る静電ポテンシャル $\Phi_0$ を $r$ の関数として書け。

(2) 点電荷 $q$ を原点から $z$ 軸正方向に $d$ だけ離れた位置においたとき，この電荷が作る点 P における静電ポテンシャル $\Phi_1$ を $r$ と $\theta$ の関数として書け。

(3) $d/r\ll1$ として，差 $\Phi_1-\Phi_0$ を $d/r$ の一次まで展開したもの（$\Phi_d$）を求めよ。

(4) 前問（3）の結果の $\Phi_d$ は，原点におかれた $z$ 軸正方向を向いた大きさ $p=qd$ の電気双極子が作る静電ポテンシャルとみなすことができる。この電気双極子による電場の $r$ 成分 $E_r$ を $p,r,\theta$ の関数として求めよ。なお

$$
\nabla\Phi=\boldsymbol e_r\frac{\partial\Phi}{\partial r}
+\boldsymbol e_\theta\frac{1}{r}\frac{\partial\Phi}{\partial\theta}
+\boldsymbol e_\phi\frac{1}{r\sin\theta}\frac{\partial\Phi}{\partial\phi}
$$

を用いてもよい。

### [A-II]

真空中に $z$ 軸正方向の一様電場 $\boldsymbol E_0=E_0\boldsymbol e_z$ が存在する（図2）。

![図2 一様電場](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_II_figure_2.png)

(1) この一様電場による，原点から距離 $r$，$z$ 軸に対する極角 $\theta$ にある点 P の静電ポテンシャル $\Phi_u$ を $r$ と $\theta$ の関数として表せ。ただし，原点において $\Phi_u=0$ とする。

その後，半径 $a$ の導体球を原点に置いた（図3）。導体球の総電荷は0であるが，外部電場の発生源である無限遠方の正および負の電荷によって導体球の表面に電荷が誘起され，導体球外部の電場もそれに応じて変化した。このときの導体球表面の電荷密度を求めたい。

![図3 導体球](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_II_figure_3.png)

(2) 導体球外部の静電ポテンシャル $\Phi$ は，鏡像の考え方を適用し，導体の代わりに $z$ 軸正方向の電気双極子 $p$ を原点に置いたときの静電ポテンシャル $\Phi_d$ を用いて $\Phi=\Phi_u+\Phi_d$ と表すことができる。$r=a$ における $\Phi$ の境界条件を考え，$p$ の値を $E_0$ を用いて表せ。

(3) 導体表面上の電荷密度 $\sigma$ を表面上の点の $\theta$ 座標の関数として求めよ。

### [B-I]

図4のように媒質 I および II を含む狭い領域を考える。境界面は平面とみなせるものとし境界面上に $x$ および $y$ 軸を定義し，領域 I から領域 II への向きを $z$ 軸の正方向とする。また，境界面上に $y$ 軸正方向に流れる面電流があるものとし，その面電流密度を $j_y$ とする。このとき媒質 I および媒質 II の磁場の $x$ 成分 $H_x^{\mathrm I}$ および $H_x^{\mathrm{II}}$ に関する境界条件

$$
H_x^{\mathrm{II}}(z=0)-H_x^{\mathrm I}(z=0)=j_y
$$

を電磁気学の法則により証明せよ。なお，図4と同じ解答用紙上の図に書き込みをして，証明に利用してもよい。

![図4 面電流が流れる境界](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_II_figure_4.png)

### [B-II]

図5のように半径 $a$ の球面上にコイルを巻いたものを真空中に置く。球の中心を原点とし，この球面状コイルは $z$ 軸に対して軸対称であるとする。球内の磁場が $z$ 軸正方向の一様磁場 $\boldsymbol H_0=H_0\cos\theta\,\boldsymbol e_r-H_0\sin\theta\,\boldsymbol e_\theta$ になるようにしたい。そのためには，場所（$\theta$）によって巻き数の密度を調節することにより，適切な表面電流密度 $\boldsymbol j=j(\theta)\boldsymbol e_\phi$ を作ればよいが，この $j(\theta)$ がどのような関数になるか検討しよう。球内部を領域 I，外部を領域 II とし，領域 I および II の透磁率は共に $\mu_0$ とする。

![図5 球面状コイルと断面図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/phys_201908_phys_II_figure_5.png)

電流のない領域 II において磁気スカラー・ポテンシャル $\Phi_m$ が定義できる。このとき，磁束密度は $\boldsymbol B=-\nabla\Phi_m$ である。

(1) $\Phi_m$ がラプラス方程式を満たすことをマクスウェル方程式を利用して示せ。

$\boldsymbol B$ の $r$ 成分が領域 I と領域 II の境界で連続であることに注意すると，$r=a$ における内部磁場の $r$ 成分の $\theta$ 依存性から $\Phi_m=\mu_0 A R(r)\cos\theta$（$A$ は定数，$R(r)$ は関数）とおける。

(2) この $\Phi_m$ をラプラス方程式に代入し，また $R(r)$ が $r$ のべき関数 $R(r)=r^n$ であると仮定し，$n$ を決定せよ。ただし，無限遠での境界条件は $R(\infty)=0$ であるとする。なお

$$
\begin{aligned}
\nabla^2\Phi={}&\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\Phi}{\partial r}\right)\\
&+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\Phi}{\partial\theta}\right)\\
&+\frac{1}{r^2\sin^2\theta}\frac{\partial^2\Phi}{\partial\phi^2}
\end{aligned}
$$

を用いてもよい。

(3) $r=a$ での境界条件 $H_r=H_0\cos\theta$ から，定数 $A$ を決定せよ。

(4) $r=a$ における磁場の $\theta$ 成分の境界条件 $H_\theta^{\mathrm{II}}-H_\theta^{\mathrm I}=j(\theta)$ を利用して，表面電流密度 $j(\theta)$ を求めよ。

### 题目描述

以下设真空介电常数为 $\varepsilon_0$，真空磁导率为 $\mu_0$。直角坐标系 $(x,y,z)$ 的单位矢量分别为 $\boldsymbol e_x,\boldsymbol e_y,\boldsymbol e_z$，极坐标系 $(r,\theta,\phi)$ 的单位矢量分别为 $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_\phi$。

**[A-I]**

考虑真空中距原点 $r$、相对于 $z$ 轴极角为 $\theta$ 的点 P（图1）。

(1) 写出位于原点的点电荷 $q$ 在点 P 产生的静电势 $\Phi_0$ 关于 $r$ 的函数。

(2) 将点电荷 $q$ 放置在距原点沿 $z$ 轴正方向 $d$ 处，写出该电荷在点 P 产生的静电势 $\Phi_1$ 关于 $r,\theta$ 的函数。

(3) 设 $d/r\ll1$，将差 $\Phi_1-\Phi_0$ 按 $d/r$ 展开至一阶，求所得的 $\Phi_d$。

(4) 第（3）问得到的 $\Phi_d$ 可视为位于原点、指向 $z$ 轴正方向、大小为 $p=qd$ 的电偶极子产生的静电势。求该偶极子电场的 $r$ 分量 $E_r$ 关于 $p,r,\theta$ 的函数。可使用

$$
\nabla\Phi=\boldsymbol e_r\frac{\partial\Phi}{\partial r}
+\boldsymbol e_\theta\frac{1}{r}\frac{\partial\Phi}{\partial\theta}
+\boldsymbol e_\phi\frac{1}{r\sin\theta}\frac{\partial\Phi}{\partial\phi}.
$$

**[A-II]**

真空中存在沿 $z$ 轴正方向的均匀电场 $\boldsymbol E_0=E_0\boldsymbol e_z$（图2）。

(1) 求此均匀电场在距原点 $r$、相对于 $z$ 轴极角为 $\theta$ 的点 P 产生的静电势 $\Phi_u$，用 $r,\theta$ 表示。规定原点处 $\Phi_u=0$。

之后，在原点放置半径为 $a$ 的导体球（图3）。导体球总电荷为0，但产生外电场的、位于无穷远处的正负电荷在导体球表面感应出电荷，球外电场也相应发生变化。现求该情况下导体球表面的电荷密度。

(2) 利用镜像法，将导体替换为位于原点、沿 $z$ 轴正方向的电偶极子 $p$，其静电势为 $\Phi_d$，则球外静电势可写为 $\Phi=\Phi_u+\Phi_d$。考虑 $r=a$ 处 $\Phi$ 的边界条件，用 $E_0$ 表示 $p$。

(3) 求导体表面电荷密度 $\sigma$ 关于表面点的 $\theta$ 坐标的函数。

**[B-I]**

如图4，考虑包含介质 I 和 II 的一个狭小区域。边界可视为平面，在其上定义 $x,y$ 轴，并以区域 I 指向区域 II 的方向为 $z$ 轴正方向。边界面上存在沿 $y$ 轴正方向流动的面电流，面电流密度为 $j_y$。根据电磁学定律证明介质 I 和 II 中磁场 $x$ 分量 $H_x^{\mathrm I}$、$H_x^{\mathrm{II}}$ 满足的边界条件

$$
H_x^{\mathrm{II}}(z=0)-H_x^{\mathrm I}(z=0)=j_y.
$$

可以在答题纸上与图4相同的图中添加标记，并用于证明。

**[B-II]**

如图5，将绕在半径为 $a$ 的球面上的线圈置于真空中。以球心为原点，假设球面线圈关于 $z$ 轴轴对称。希望球内磁场为沿 $z$ 轴正方向的均匀磁场 $\boldsymbol H_0=H_0\cos\theta\,\boldsymbol e_r-H_0\sin\theta\,\boldsymbol e_\theta$。为此，可随位置（$\theta$）调节绕线匝数密度，从而产生适当的面电流密度 $\boldsymbol j=j(\theta)\boldsymbol e_\phi$。讨论 $j(\theta)$ 应为怎样的函数。将球内定义为区域 I，球外定义为区域 II，两区域的磁导率均为 $\mu_0$。

在无电流的区域 II，可定义磁标势 $\Phi_m$，此时磁感应强度为 $\boldsymbol B=-\nabla\Phi_m$。

(1) 利用麦克斯韦方程证明 $\Phi_m$ 满足拉普拉斯方程。

注意到 $\boldsymbol B$ 的 $r$ 分量在区域 I、II 的边界连续，根据 $r=a$ 处内部磁场 $r$ 分量关于 $\theta$ 的依赖关系，可设 $\Phi_m=\mu_0 A R(r)\cos\theta$，其中 $A$ 为常数，$R(r)$ 为函数。

(2) 将此 $\Phi_m$ 代入拉普拉斯方程，并假设 $R(r)$ 是 $r$ 的幂函数 $R(r)=r^n$，确定 $n$。无穷远处的边界条件为 $R(\infty)=0$。可使用

$$
\begin{aligned}
\nabla^2\Phi={}&\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\Phi}{\partial r}\right)\\
&+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\Phi}{\partial\theta}\right)\\
&+\frac{1}{r^2\sin^2\theta}\frac{\partial^2\Phi}{\partial\phi^2}.
\end{aligned}
$$

(3) 根据 $r=a$ 处的边界条件 $H_r=H_0\cos\theta$，确定常数 $A$。

(4) 利用 $r=a$ 处磁场 $\theta$ 分量的边界条件 $H_\theta^{\mathrm{II}}-H_\theta^{\mathrm I}=j(\theta)$，求面电流密度 $j(\theta)$。

## **Kai**
### \[A-I\]
#### (1)

$$
  \begin{aligned}
  \Phi_0 = \frac{q}{4 \pi \varepsilon_0 r}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0
  \sqrt{r^2 \sin^2 \theta + (r \cos \theta - d)^2}}
  \\
  &= \frac{q}{4 \pi \varepsilon_0 \sqrt{r^2 - 2dr \cos \theta + d^2}}
  \end{aligned}
$$

#### (3)
(2) より、 $d/r$ の1次までで

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 - \frac{2d \cos \theta}{r} + \frac{d^2}{r^2} \right)^{-1/2}
  \\
  &\simeq \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 + \frac{d \cos \theta}{r} \right)
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \Phi_d
  &= \frac{qd \cos \theta}{4 \pi \varepsilon_0 r^2}
  \end{aligned}
$$

である。

#### (4)

$$
  \begin{aligned}
  E_r
  &= \left( - \boldsymbol{\nabla} \Phi_d \right) \cdot \boldsymbol{e}_r
  \\
  &= - \frac{\partial \Phi_d}{\partial r}
  \\
  &= \frac{p \cos \theta}{2 \pi \varepsilon_0 r^3}
  \end{aligned}
$$

### \[A-II\]
#### (1)
$\boldsymbol{\nabla} \Phi_u = - \boldsymbol{E}_0 = - E_0 \boldsymbol{e}_z$
から、適当な定数 $c$ を使って、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z + c
  \end{aligned}
$$

と書けることがわかるが、原点で $\Phi_u = 0$ であることから $c=0$ がわかり、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z
  \\
  &= - E_0 r \cos \theta
  \end{aligned}
$$

を得る。

#### (2)
\[A-II\] (1) と \[A-I\] (3) から

$$
\begin{aligned}
\Phi
&= \Phi_u + \Phi_d
\\
&= - E_0 r \cos \theta + \frac{p \cos \theta}{4 \pi \varepsilon_0 r^2}
\\
&= \frac{- 4 \pi \varepsilon_0 E_0 r^3 + p}{4 \pi \varepsilon_0 r^2}
\cos \theta
\end{aligned}
$$

がわかるが、$r=a$ でこれが $\theta$ によらない定数になることから、

$$
\begin{aligned}
p = 4 \pi \varepsilon_0 E_0 a^3
\end{aligned}
$$

を得る。

#### (3)
$r \geq a$ において、(2) より

$$
\begin{aligned}
\Phi
&= \left( -r + \frac{a^3}{r^2} \right) E_0 \cos \theta
\end{aligned}
$$

なので、 $r$ 方向の電場 $E_r = E_r(r, \theta)$ について

$$
\begin{aligned}
E_r (r, \theta)
&= - \frac{\partial \Phi}{\partial r}
\\
&= \left( 1 + \frac{2a^3}{r^3} \right) E_0 \cos \theta
\\
\therefore \ \ 
E_r (a, \theta) &= 3 E_0 \cos \theta
\end{aligned}
$$

がわかる。
そこで、電場に関するガウスの法則を導体表面に適用して、

$$
\begin{aligned}
\sigma
&= \varepsilon_0 E_r(a, \theta)
\\
&= 3 \varepsilon_0 E_0 \cos \theta
\end{aligned}
$$

を得る。

### \[B-I\]
例えば、 $a \gt 0, b \gt 0$ として、
4点 $(0,0,b), (a,0,b), (a,0,-b), (0,0,-b)$ を頂点とする長方形を考える。
この長方形の向きに対応する法線は $+y$ 方向であり、貫く電流は $a j_y$ であるから、
この長方形に関してアンペールの法則を適用すると、

$$
\begin{aligned}
&a H_x^{II}(z=b) + \int_b^0 dz \ H_z^{II}\\
&\quad+ \int_0^{-b} dz \ H_z^I - a H_x^I(z=-b)\\
&\quad+ \int_{-b}^0 dz \ H_z^I + \int_0^b dz \ H_z^{II}\\
&= a j_y\\
&\therefore \ \ H_x^{II}(z=b) - H_x^I(z=-b)\\
&\quad+ \frac{1}{a} \int_b^0 dz \ H_z^{II} + \frac{1}{a} \int_0^{-b} dz \ H_z^I\\
&\quad+ \frac{1}{a} \int_{-b}^0 dz \ H_z^I + \frac{1}{a} \int_0^b dz \ H_z^{II}\\
&= j_y
\end{aligned}
$$

となるが、ここで $b \to +0$ とすると、題意の式を得る。

### \[B-II\]

#### (1)

磁束に関する Gauss の法則 $\nabla\cdot\boldsymbol B=0$ と $\boldsymbol B=-\nabla\Phi_m$ から、$\nabla^2\Phi_m=0$ となる。

#### (2)

$\phi$ への依存性はなく、$\Phi_m=\mu_0 A r^n\cos\theta$ を代入すると

$$
\nabla^2\Phi_m=\mu_0 A\{n(n+1)-2\}r^{n-2}\cos\theta=0.
$$

したがって $n=1,-2$ であり、無限遠で消える解は $n=-2$ である。よって $\Phi_m=\mu_0 A\cos\theta/r^2$。

#### (3)

$$
H_r^{\mathrm{II}}=-\frac1{\mu_0}\frac{\partial\Phi_m}{\partial r}
=\frac{2A\cos\theta}{r^3}.
$$

$r=a$ で $H_r^{\mathrm{II}}=H_0\cos\theta$ だから、$A=H_0a^3/2$ となる。

#### (4)

$$
H_\theta^{\mathrm{II}}=-\frac1{\mu_0r}\frac{\partial\Phi_m}{\partial\theta}
=\frac{A\sin\theta}{r^3}.
$$

$r=a$ では $H_\theta^{\mathrm{II}}=\frac12H_0\sin\theta$、$H_\theta^{\mathrm I}=-H_0\sin\theta$ なので、

$$
\boxed{j(\theta)=\frac32H_0\sin\theta}.
$$

## **Reference**

- [大学公表の原題](https://pr.phys.kyushu-u.ac.jp/graduate/pdf/R2_inshi.pdf#page=7)
