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

- 電束に関するガウスの法則：①。
- 磁束に関するガウスの法則：②。
- ファラデー・マクスウェルの法則：③。
- アンペア・マクスウェルの法則：④。

### [2]

真空中の領域1と領域2の間の不連続境界面を $S$ とする。両領域における $S$ 上での電界と磁界をそれぞれ $\boldsymbol E_1,\boldsymbol E_2,\boldsymbol H_1,\boldsymbol H_2$、領域2から領域1へ向く $S$ の単位法線ベクトルを $\boldsymbol n$、$S$ 上の面電流密度と面電荷密度をそれぞれ $\boldsymbol K,\xi$ とする。積分形で表される電束に関するガウスの法則とアンペア・マクスウェルの法則から導かれる境界条件は

$$
\boldsymbol E\text{ に対する境界条件：}\boxed{⑤},\qquad
\boldsymbol H\text{ に対する境界条件：}\boxed{⑥}
$$

となる。

### [3]

円柱状の定常電流による磁界を求める。円柱座標系 $(r,\varphi,z)$ の基本ベクトルを $\boldsymbol i_r,\boldsymbol i_\varphi,\boldsymbol i_z$、磁界の各成分を $H_r,H_\varphi,H_z$ とする。④の空間微分の項は

$$
\frac1{\boxed{⑦}}
\begin{vmatrix}
\boldsymbol i_r&\boxed{⑦}\boldsymbol i_\varphi&\boldsymbol i_z\\
\partial_r&\partial_\varphi&\partial_z\\
H_r&\boxed{⑦}H_\varphi&H_z
\end{vmatrix}
=\boldsymbol i_r\left(\frac1{\boxed{⑦}}\frac{\partial H_z}{\partial\varphi}
-\frac{\partial H_\varphi}{\partial z}\right)
+\boldsymbol i_\varphi\left(\frac{\partial H_r}{\partial z}+\boxed{⑧}\right)
+\boldsymbol i_z\left(\boxed{⑨}-\frac1{\boxed{⑦}}\frac{\partial H_r}{\partial\varphi}\right)
$$

となる。

まず、$z$ 軸を中心軸とした半径 $a$ の無限長円柱内で、一様な定常電流が $z$ 方向に流れる場合を考える。電流密度は $\boldsymbol J=\boldsymbol i_zJ_0$、$J_0>0$ は定数であり、円柱外では電流密度は0である。この場合、上式は⑩方向成分のみとなり、磁界は⑪方向成分のみとなるから、解くべき微分方程式は

$$
\boxed{⑨}=\begin{cases}\boxed{⑫}&r<a,\\\boxed{⑬}&r>a.\end{cases}
$$

境界 $r=a$ で $\boldsymbol K=0$ なので、磁界の⑭（イ：法線、ロ：接線）成分、すなわち⑮および $H_z$ は連続する。この条件と $r=0$ で磁界が有限となる条件から

$$
\boxed{⑮}=\begin{cases}\boxed{⑯}&r<a,\\\boxed{⑰}&r\ge a.\end{cases}
$$

さらに、円柱内 $0<r<a$ に一様な定常電流 $\boldsymbol i_\varphi J_1$（$J_1>0$ は定数）が加わる場合を考える。この電流は $z$ に依存せず、円柱外では0である。この電流成分は回転の⑱方向成分にのみ寄与し、これによる磁界は⑲方向成分のみとなる。したがって

$$
\boxed{⑧}=\begin{cases}\boxed{⑳}&r<a,\\\boxed{⑬}&r>a.\end{cases}
$$

$r=a$ に面電流はないので、この追加の磁界も⑭成分、すなわち㉑および $H_\varphi$ が連続する。この条件と $r\to\infty$ で磁界が満たすべき条件から

$$
\boxed{㉑}=\begin{cases}\boxed{㉒}&r<a,\\\boxed{⑬}&r\ge a.\end{cases}
$$

磁界成分比㉑/⑮の分布を横軸 $r$ のグラフに図示すると㉓となる。磁気力線の $z$ 軸を中心とする回転のピッチ、すなわち磁気力線に沿って $z$ 軸を中心として1回転するときに $z$ 方向へ進む距離は、$r=0$ の軸付近では $r=a$ 付近（$r<a$）に比べて㉔（イ：短、ロ：長）く、$r\ge a$ では㉕となる。

#### 题目描述

填写①〜㉕；⑭与㉔选相应选项，㉓画图。

[1] 写出真空中关于 $\boldsymbol E,\boldsymbol H$ 的四条麦克斯韦方程，依次为电场高斯定律①、磁场高斯定律②、法拉第定律③、安培–麦克斯韦定律④。电流密度、电荷密度、介电常数和磁导率分别为 $\boldsymbol J,\rho,\varepsilon_0,\mu_0$。

[2] 真空中两区域以曲面 $S$ 分隔，单位法向量 $\boldsymbol n$ 从区域2指向区域1，界面上的面电荷与面电流密度分别为 $\xi,\boldsymbol K$。由积分形式的高斯定律和安培–麦克斯韦定律，写出电场边界条件⑤及磁场边界条件⑥。

[3] 使用柱坐标 $(r,\varphi,z)$，填出上述旋度表达式中的⑦〜⑨。半径 $a$ 的无限长圆柱内有均匀轴向电流 $\boldsymbol i_zJ_0$，$J_0>0$，外部电流为0。填写旋度和磁场仅有的方向⑩、⑪，以及控制方程右端⑫、⑬。由于边界上无面电流，判断⑭法向（イ）或切向（ロ）分量连续，并填写该分量⑮。结合轴上磁场有限，求圆柱内外磁场⑯、⑰。

再在圆柱内部 $0<r<a$ 叠加与 $z$ 无关的环向电流 $\boldsymbol i_\varphi J_1$，$J_1>0$，外部为0。填写该电流对应的旋度方向⑱、产生的磁场方向⑲和微分方程右端⑳。利用⑭方向的分量㉑连续及无穷远条件，求内部附加磁场㉒。画出㉑/⑮关于 $r$ 的曲线㉓；比较磁力线绕轴一周的轴向位移（螺距），判断轴附近相对于圆柱内靠近表面处是更短（イ）还是更长（ロ）㉔，并求圆柱外螺距㉕。

## **Kai**

### [1] マクスウェル方程式

真空中では $\boldsymbol D=\varepsilon_0\boldsymbol E$、$\boldsymbol B=\mu_0\boldsymbol H$ なので

$$
\boxed{①:\ \nabla\cdot\boldsymbol E=\frac{\rho}{\varepsilon_0}},\qquad
\boxed{②:\ \nabla\cdot\boldsymbol H=0},
$$

$$
\boxed{③:\ \nabla\times\boldsymbol E=-\mu_0\frac{\partial\boldsymbol H}{\partial t}},\qquad
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

![磁界成分比の概形](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/osaka-university/engineering/eei/2020/osaka_eei_201908_em1_ratio.svg)

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
