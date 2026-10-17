---
sidebar_label: "2019年8月実施 基礎科目 電磁理論1"
tags:
  - Osaka-University
  - Physics.Electromagnetism.Maxwell-Equations
  - Physics.Electromagnetism.Ampere-Law
---

# 大阪大学 工学研究科 電気電子情報工学専攻 2019年8月実施 基礎科目 電磁理論1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%A4%A7%E9%98%AA%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E9%9B%BB%E6%B0%97%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_%E9%9B%BB%E7%A3%81%E7%90%86%E8%AB%961.html) refined with GPT 6 Astra)

## **Description**

①〜㉕に対応する数式、数値、語句を答えよ。ただし⑭、㉔は適切な語句の記号を選び、㉓はグラフを描け。

### [1]

真空中の電界 $\boldsymbol E$、磁界 $\boldsymbol H$ に対するマクスウェル方程式の微分表示は、電流密度を $\boldsymbol J$、電荷密度を $\rho$、誘電率を $\varepsilon_0$、透磁率を $\mu_0$ とすると、次の四式で記述される。

- 電束に関するガウスの法則：$\boxed{①}$。（1）
- 磁束に関するガウスの法則：$\boxed{②}$。（2）
- ファラデー・マクスウェルの法則：$\boxed{③}$。（3）
- アンペア・マクスウェルの法則：$\boxed{④}$。（4）

### [2]

真空中の領域1と領域2の間の不連続境界面を $S$ とする。両領域における $S$ 上での電界と磁界をそれぞれ $\boldsymbol E_1,\boldsymbol E_2,\boldsymbol H_1,\boldsymbol H_2$、領域2から領域1へ向く $S$ の単位法線ベクトルを $\boldsymbol n$、$S$ 上の面電流密度と面電荷密度をそれぞれ $\boldsymbol K,\xi$ とする。積分形で表される電束に関するガウスの法則とアンペア・マクスウェルの法則から導かれる境界条件は

$$
\boldsymbol E\text{ に対する境界条件：}\boxed{⑤},\tag{5}
$$

$$
\boldsymbol H\text{ に対する境界条件：}\boxed{⑥}\tag{6}
$$

となる。

### [3]

円柱状の定常電流による磁界を求める。円柱座標系 $(r,\varphi,z)$ の基本ベクトルを $\boldsymbol i_r,\boldsymbol i_\varphi,\boldsymbol i_z$、磁界の各成分を $H_r,H_\varphi,H_z$ とする。④の空間微分の項は

$$
\begin{aligned}
&\frac1{\boxed{⑦}}
\begin{vmatrix}
\boldsymbol i_r&\boxed{⑦}\boldsymbol i_\varphi&\boldsymbol i_z\\
\partial_r&\partial_\varphi&\partial_z\\
H_r&\boxed{⑦}H_\varphi&H_z
\end{vmatrix}\\
&=\boldsymbol i_r\left(\frac1{\boxed{⑦}}\frac{\partial H_z}{\partial\varphi}
-\frac{\partial H_\varphi}{\partial z}\right)\\
&\quad+\boldsymbol i_\varphi\left(\frac{\partial H_r}{\partial z}+\boxed{⑧}\right)\\
&\quad+\boldsymbol i_z\left(\boxed{⑨}-\frac1{\boxed{⑦}}\frac{\partial H_r}{\partial\varphi}\right)
\end{aligned}\tag{7}
$$

となる。

まず、$z$ 軸を中心軸とした半径 $a$ の無限長円柱内で、一様な定常電流が $z$ 方向に流れる場合を考える。電流密度は $\boldsymbol J=\boldsymbol i_zJ_0$、$J_0>0$ は定数であり、円柱外では電流密度は0である。この場合、上式は⑩方向成分のみとなり、磁界は⑪方向成分のみとなるから、解くべき微分方程式は

$$
\boxed{⑨}=\begin{cases}\boxed{⑫}&r<a,\\\boxed{⑬}&r>a.\end{cases}\tag{8}
$$

境界 $r=a$ で $\boldsymbol K=0$ なので、磁界の⑭（イ：法線、ロ：接線）成分、すなわち⑮および $H_z$ は連続する。この条件と $r=0$ で磁界が有限となる条件から

$$
\boxed{⑮}=\begin{cases}\boxed{⑯}&r<a,\\\boxed{⑰}&r\ge a.\end{cases}\tag{9}
$$

さらに、円柱内 $0<r<a$ に一様な定常電流 $\boldsymbol i_\varphi J_1$（$J_1>0$ は定数）が加わる場合を考える。この電流は $z$ に依存せず、円柱外では0である。この電流成分は回転の⑱方向成分にのみ寄与し、これによる磁界は⑲方向成分のみとなる。したがって

$$
\boxed{⑧}=\begin{cases}\boxed{⑳}&r<a,\\\boxed{⑬}&r>a.\end{cases}\tag{10}
$$

$r=a$ に面電流はないので、この追加の磁界も⑭成分、すなわち㉑および $H_\varphi$ が連続する。この条件と $r\to\infty$ で磁界が満たすべき条件から

$$
\boxed{㉑}=\begin{cases}\boxed{㉒}&r<a,\\\boxed{⑬}&r\ge a.\end{cases}\tag{11}
$$

磁界成分比㉑/⑮の分布を横軸 $r$ のグラフに図示すると㉓となる。磁気力線の $z$ 軸を中心とする回転のピッチ、すなわち磁気力線に沿って $z$ 軸を中心として1回転するときに $z$ 方向へ進む距離は、$r=0$ の軸付近では $r=a$ 付近（$r<a$）に比べて㉔（イ：短、ロ：長）く、$r\ge a$ では㉕となる。

#### 题目描述

在答题纸上写出①～㉕的编号，填入以下文字空白处所需的数学式、数值或词语。其中⑭、㉔选择合适词语并写出其选项符号，㉓作图。

**[1]** 真空中电场 $\boldsymbol E$ 和磁场 $\boldsymbol H$ 的麦克斯韦方程的微分形式，记电流密度为 $\boldsymbol J$、电荷密度为 $\rho$、介电常数为 $\varepsilon_0$、磁导率为 $\mu_0$，可用以下4个方程描述：

- 关于电通量的高斯定律：$\boxed{①}$。（1）
- 关于磁通量的高斯定律：$\boxed{②}$。（2）
- 法拉第–麦克斯韦定律：$\boxed{③}$。（3）
- 安培–麦克斯韦定律：$\boxed{④}$。（4）

**[2]** 考虑真空中的区域1和区域2，两者之间的不连续边界面记为 $S$。各区域在 $S$ 上的电场、磁场分别记为 $\boldsymbol E_1,\boldsymbol E_2,\boldsymbol H_1,\boldsymbol H_2$；$S$ 的单位法向量 $\boldsymbol n$ 从区域2指向区域1，$S$ 上的面电流密度和面电荷密度分别为 $\boldsymbol K,\xi$。由积分形式的关于电通量的高斯定律和安培–麦克斯韦定律导出的边界条件分别是

$$
\text{电场 }\boldsymbol E\text{ 的边界条件：}\boxed{⑤},\qquad\text{（5）}
$$

$$
\text{磁场 }\boldsymbol H\text{ 的边界条件：}\boxed{⑥}.\qquad\text{（6）}
$$

**[3]** 以下求圆柱状恒定电流产生的磁场。在柱坐标系 $(r,\varphi,z)$ 中，基本向量为 $\boldsymbol i_r,\boldsymbol i_\varphi,\boldsymbol i_z$，$\boldsymbol H$ 的对应分量为 $H_r,H_\varphi,H_z$。考虑安培–麦克斯韦定律式(4)的柱坐标分量，得到

$$
\begin{aligned}
&\text{式(4)中的空间微分项}\\
&=\frac1{\boxed{⑦}}
\begin{vmatrix}
\boldsymbol i_r&\boxed{⑦}\boldsymbol i_\varphi&\boldsymbol i_z\\
\partial_r&\partial_\varphi&\partial_z\\
H_r&\boxed{⑦}H_\varphi&H_z
\end{vmatrix}\\
&=\boldsymbol i_r\left(\frac1{\boxed{⑦}}\frac{\partial H_z}{\partial\varphi}-\frac{\partial H_\varphi}{\partial z}\right)\\
&\quad+\boldsymbol i_\varphi\left(\frac{\partial H_r}{\partial z}+\boxed{⑧}\right)\\
&\quad+\boldsymbol i_z\left(\boxed{⑨}-\frac1{\boxed{⑦}}\frac{\partial H_r}{\partial\varphi}\right).
\end{aligned}\qquad\text{（7）}
$$

首先考虑以 $z$ 轴为中心轴、半径为 $a$ 的无限长圆柱内，均匀恒定电流沿 $z$ 方向流动的情况。电流密度为 $\boldsymbol J=\boldsymbol i_zJ_0$，$J_0>0$ 为常数。由式(4)，式(7)只有 $\boxed{⑩}$ 方向分量；由系统的对称性，磁场 $\boldsymbol H$ 只有 $\boxed{⑪}$ 方向分量。因此求磁场所需解的微分方程为

$$
\boxed{⑨}=\begin{cases}\boxed{⑫}&(r<a),\\\boxed{⑬}&(r>a).\end{cases}\qquad\text{（8）}
$$

在此电流分布的边界 $r=a$，面电流密度 $\boldsymbol K=0$。应用式(6)的边界条件，磁场 $\boldsymbol H$ 在边界上的⑭（イ：法向，ロ：切向）分量，即磁场分量 $\boxed{⑮}$ 和 $H_z$ 连续。利用该边界条件和 $r=0$ 处磁场有限的条件解式(8)，得到

$$
\boxed{⑮}=\begin{cases}\boxed{⑯}&(r<a),\\\boxed{⑰}&(r\ge a).\end{cases}\qquad\text{（9）}
$$

在上述电流分布的基础上，进一步考虑圆柱内部 $0<r<a$ 另有均匀恒定电流沿 $\varphi$ 方向流动的情况。此新增电流与 $z$ 无关，其电流密度为 $\boldsymbol i_\varphi J_1$，$J_1>0$ 为常数。该电流分量只对式(7)的 $\boxed{⑱}$ 方向分量有贡献；由系统对称性，它产生的磁场只有 $\boxed{⑲}$ 方向分量。因此求新增电流产生的磁场所需解的微分方程为

$$
\boxed{⑧}=\begin{cases}\boxed{⑳}&(r<a),\\\boxed{⑬}&(r>a).\end{cases}\qquad\text{（10）}
$$

在此电流分布的边界 $r=a$，面电流密度 $\boldsymbol K=0$。应用式(6)的边界条件，新增电流所产生磁场在边界上的⑭（イ：法向，ロ：切向）分量，即磁场分量 $\boxed{㉑}$ 和 $H_\varphi$ 连续。利用该边界条件以及 $r\to\infty$ 时磁场应满足的条件解式(10)，得到

$$
\boxed{㉑}=\begin{cases}\boxed{㉒}&(r<a),\\\boxed{⑬}&(r\ge a).\end{cases}\qquad\text{（11）}
$$

由式(9)和式(11)，以 $r$ 为横轴画出磁场分量之比 $\boxed{㉑}/\boxed{⑮}$ 的分布，得到 $\boxed{㉓}$。因此，表示磁场 $\boldsymbol H$ 分布的磁力线绕 $z$ 轴旋转的螺距，即沿磁力线绕 $z$ 轴一周时在 $z$ 方向前进的距离，在 $r=0$ 的轴附近相较于 $r=a$ 附近（$r<a$）为㉔（イ：较短，ロ：较长）；而在 $r\ge a$ 时为 $\boxed{㉕}$。

## **Kai**

### [1] マクスウェル方程式

真空中では $\boldsymbol D=\varepsilon_0\boldsymbol E$、$\boldsymbol B=\mu_0\boldsymbol H$ なので

$$
\boxed{①:\ \nabla\cdot\boldsymbol E=\frac{\rho}{\varepsilon_0}},\qquad
\boxed{②:\ \nabla\cdot\boldsymbol H=0},
$$

$$
\boxed{③:\ \nabla\times\boldsymbol E=-\mu_0\frac{\partial\boldsymbol H}{\partial t}},
$$

$$
\boxed{④:\ \nabla\times\boldsymbol H=\boldsymbol J+\varepsilon_0\frac{\partial\boldsymbol E}{\partial t}}.
$$

### [2] 境界条件

界面を挟む薄い円柱にガウスの法則を適用すると

$$
\boxed{⑤:\ \boldsymbol n\cdot(\boldsymbol E_1-\boldsymbol E_2)=\frac{\xi}{\varepsilon_0}}.
$$

界面を横切る微小な長方形にアンペア・マクスウェルの法則を適用すると

$$
\boxed{⑥:\ \boldsymbol n\times(\boldsymbol H_1-\boldsymbol H_2)=\boldsymbol K}.
$$

ここでは法線の向きが領域2から領域1であることに注意する。

### [3] 円柱状の電流による磁界

#### ⑦〜⑨：円柱座標での回転

$$
\boxed{⑦:r},\qquad
\boxed{⑧:-\frac{\partial H_z}{\partial r}},\qquad
\boxed{⑨:\frac1r\frac{\partial(rH_\varphi)}{\partial r}}.
$$

#### ⑩〜⑰：軸方向電流

定常場なので変位電流は0であり、$\nabla\times\boldsymbol H=\boldsymbol J$。対称性より磁界は円周方向を向くから

$$
\boxed{⑩:z},\qquad\boxed{⑪:\varphi},\qquad
\boxed{⑫:J_0},\qquad\boxed{⑬:0}.
$$

⑥で $\boldsymbol K=0$ とすれば接線成分が連続するので

$$
\boxed{⑭:\text{ロ（接線）}},\qquad\boxed{⑮:H_\varphi}.
$$

内部では $(rH_\varphi)'=J_0r$ より $H_\varphi=J_0r/2+C/r$。軸上で有限となるため $C=0$。外部では $(rH_\varphi)'=0$ より $H_\varphi=C_{\mathrm{out}}/r$ であり、$r=a$ での連続性から $C_{\mathrm{out}}=J_0a^2/2$。したがって

$$
\boxed{⑯:\frac{J_0r}{2}},\qquad
\boxed{⑰:\frac{J_0a^2}{2r}}.
$$

これはアンペアの周回積分 $2\pi rH_\varphi=J_0\pi\min(r^2,a^2)$ からも確認できる。

#### ⑱〜㉒：円周方向電流

追加電流の方向が $\varphi$ なので、追加磁界は $z$ 方向となり

$$
\boxed{⑱:\varphi},\qquad\boxed{⑲:z},\qquad
\boxed{⑳:J_1},\qquad\boxed{㉑:H_z}.
$$

$-dH_z/dr=J_1$ を積分すると、内部では $H_z=-J_1r+C_1$、外部では一定値となる。無限遠で磁界が0となる条件より外部は0。$r=a$ での連続性から $C_1=J_1a$ なので

$$
\boxed{㉒:J_1(a-r)}.
$$

#### ㉓〜㉕：成分比とピッチ

以上より

$$
\boxed{\frac{H_z}{H_\varphi}=
\begin{cases}
\displaystyle\frac{2J_1}{J_0}\left(\frac ar-1\right),&0<r<a,\\
0,&r\ge a.
\end{cases}}
$$

㉓のグラフは次のようになる。$r\to0^+$ で $+\infty$、$r=a$ で0となり、以後は0である。

![磁界成分比の概形](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/eei/2020/osaka_eei_201908_em1_ratio.svg)

磁気力線上では $dz/(r\,d\varphi)=H_z/H_\varphi$。半径は一定であるから、1回転のピッチ $p(r)$ は

$$
p(r)=2\pi r\frac{H_z}{H_\varphi}
=\begin{cases}
\displaystyle\frac{4\pi J_1}{J_0}(a-r),&0<r<a,\\
0,&r\ge a.
\end{cases}
$$

内部のピッチは $r$ とともに単調に減少する。したがって

$$
\boxed{㉔:\text{ロ（長）}},\qquad\boxed{㉕:0}.
$$

成分比は軸に近づくと発散するが、ピッチの極限は $4\pi J_1a/J_0$ と有限である。軸そのものでは磁気力線は直線であり、ここでの比較は $r\to0^+$ の軸付近についてのものである。

## **Reference**

- [大阪大学公式：令和2年度入学者選抜試験・基礎科目（PDF 7–8ページ）](http://www.eei.eng.osaka-u.ac.jp/wordpress/wp-content/uploads/2020/04/2019basic.pdf)
- [Miyake：2020年度 基礎科目 電磁理論1](https://miyake.github.io/exams/%E5%A4%A7%E9%98%AA%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E9%9B%BB%E6%B0%97%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_%E9%9B%BB%E7%A3%81%E7%90%86%E8%AB%961.html)
