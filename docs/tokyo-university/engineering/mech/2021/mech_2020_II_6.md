---
sidebar_label: "2021年度 問題 6（材料力学）"
tags:
  - Tokyo-University
  - Engineering.Mechanics-of-Materials.Composite-Beams
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 東京大学 工学系研究科 機械工学専攻 2021年度 機械工学（材料力学） 問題 6

## **Author**

祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

図6-1のように，ヤング率 $E$ の部材 A と，ヤング率 $2E$ の部材 B および B′ を貼り合わせて作った，長さ $l$ の組合せはりの左端が壁に固定されている。部材 A の高さは $2h$，幅は $b$ であり，部材 B および B′ の各々の高さは $h$，幅は $b$ である。はりの曲げに際して部材 A，B，B′ は接合面において互いにすべらないとし，はりの自重は無視する。はりの右端（自由端）に曲げモーメント $M$ が働くとき，以下の設問に答えよ。

(1) はりの曲率半径を $R$ とするとき，はり断面における垂直ひずみおよび垂直応力の $y$ 軸に沿った分布を表す式を求めよ。なお，座標軸は図に示すようにとり，断面の図心が $y=0$ 上にあるものとする。

(2) はりの曲げ剛性を求めよ。

![図6-1：三層の組合せはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_6_original_fig1.png)

次に，図6-2のようにヤング率 $E$ の部材 A と，ヤング率 $2E$ の部材 B を貼り合わせて作った，長さ $l$ の組合せはりを考える。部材 A および B はいずれも高さ $h$，幅 $b$ である。はりの曲げに際して部材 A および B は接合面において互いにすべらないとし，はりの自重は無視する。はりの左端が壁に固定され，右端（自由端）に曲げモーメント $M$ が働くとき，以下の設問に答えよ。

(3) 図6-3のように，部材 A と B の接合面とはりの中立面（はり断面の垂直ひずみおよび応力がゼロとなる面）との距離を $h_0$ とする。はりの曲率半径を $R$ とするとき，はり断面における垂直ひずみおよび垂直応力の $y$ 軸に沿った分布を表す式を求めるとともに，$h_0$ を求めよ。なお，部材 A と B の接合面を $y=0$ とせよ。

(4) はりの曲率半径 $R$ と曲げモーメント $M$ の関係式を導け。

![図6-2：二層の組合せはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_6_original_fig2.png)

![図6-3：曲率半径と中立面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_6_original_fig3.png)

#### 题目描述

如图6-1所示，将杨氏模量为 $E$ 的构件 A 与杨氏模量为 $2E$ 的构件 B、B′ 粘合成长度为 $l$ 的组合梁，其左端固定于墙面。构件 A 的高度为 $2h$、宽度为 $b$；构件 B、B′ 的高度均为 $h$、宽度均为 $b$。弯曲时各构件在接合面上不发生相对滑动，忽略梁的自重。梁右端（自由端）受到弯矩 $M$，回答下列问题。

(1) 设梁的曲率半径为 $R$，求梁截面上正应变和正应力沿 $y$ 轴的分布表达式。坐标轴如图所示，截面形心位于 $y=0$ 上。

(2) 求梁的抗弯刚度。

![图6-1：三层组合梁](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_6_original_fig1.png)

接着考虑图6-2所示长度为 $l$ 的组合梁，由杨氏模量为 $E$ 的构件 A 与杨氏模量为 $2E$ 的构件 B 粘合而成。两构件的高度均为 $h$、宽度均为 $b$，弯曲时接合面不发生相对滑动，忽略梁的自重。梁左端固定于墙面，右端（自由端）受到弯矩 $M$。回答下列问题。

(3) 如图6-3所示，设构件 A、B 的接合面与梁中性面（梁截面上正应变与正应力均为零的面）之间的距离为 $h_0$。当梁的曲率半径为 $R$ 时，求截面上正应变和正应力沿 $y$ 轴的分布表达式，并求 $h_0$。取 A、B 的接合面为 $y=0$。

(4) 导出梁的曲率半径 $R$ 与弯矩 $M$ 的关系。

![图6-2：双层组合梁](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_6_original_fig2.png)

![图6-3：曲率半径及中性面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_6_original_fig3.png)

## **Kai**

### (1)・(2) 対称断面

中立面の曲率半径を $\rho$ とする。平面保持より $\varepsilon_x=y/\rho$ であり、

$$
\boxed{\sigma_x(y)=\begin{cases}Ey/\rho&|y|\le h,\\2Ey/\rho&h<|y|\le2h.\end{cases}}
$$

したがって曲げ剛性は

$$
\begin{gathered}
\begin{aligned}
D={}&bE\int_{-h}^{h}y^2\,dy\\
&+2bE\left(\int_{-2h}^{-h}y^2\,dy+\int_h^{2h}y^2\,dy\right)\\
&=\boxed{10Ebh^3},
\end{aligned}\\
M=\frac{D}{\rho}.
\end{gathered}
$$

内表面の半径を $R$ と表す場合には $\rho=R+2h$ と置く。

### (3) 二層断面

中立面の半径は $\rho=R+h+h_0$。平面保持とフックの法則より

$$
\varepsilon_x=\frac{y-h_0}{\rho},\qquad
\sigma_x=\begin{cases}E(y-h_0)/\rho&-h\le y\le0,\\2E(y-h_0)/\rho&0\le y\le h.\end{cases}
$$

軸力ゼロの条件から

$$
\int_{-h}^{0}Eb(y-h_0)\,dy+\int_0^h2Eb(y-h_0)\,dy=0
\quad\Longrightarrow\quad \boxed{h_0=\frac h6}.
$$

よって

$$
\begin{gathered}
\boxed{\varepsilon_x=\frac{6y-h}{6R+7h}},\\
\boxed{\sigma_x=\begin{cases}E(6y-h)/(6R+7h)&-h\le y\le0,\\2E(6y-h)/(6R+7h)&0\le y\le h.\end{cases}}
\end{gathered}
$$

### (4)

中立面まわりの曲げ剛性は

$$
D=Eb\int_{-h}^0\left(y-\frac h6\right)^2dy+2Eb\int_0^h\left(y-\frac h6\right)^2dy=\frac{11}{12}Ebh^3.
$$

したがって

$$
\boxed{M=\frac{D}{R+7h/6}=\frac{11Ebh^3}{2(6R+7h)}}.
$$

## **Reference**

- [東京大学 公式問題（2021年度、第2部）](https://www2.mech.t.u-tokyo.ac.jp/wp-content/uploads/2022/04/R02%E7%AC%AC2%E9%83%A8.pdf)
- [SN：2021-II 材料力学](https://bloodystream.hatenadiary.jp/entry/2023/08/12/233000)
