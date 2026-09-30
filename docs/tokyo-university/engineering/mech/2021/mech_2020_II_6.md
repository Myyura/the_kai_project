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

### 日本語題面

幅 $b$、長さ $l$ の接着組合せ片持ちはりに、自由端で一定の曲げモーメント $M$ を加える。接合面ですべらず、自重を無視する。$x$ は軸方向、$y$ は下向きで、図示の $M$ は下側を引張りにする。

1. 中央層 A の厚さが $2h$、ヤング率が $E$、上下の層 B、B′ の厚さが各 $h$、ヤング率が各 $2E$ の対称断面を考える。図心を $y=0$ とし、曲率半径を用いて軸方向のひずみ・応力分布を表せ。
2. この対称断面の曲げ剛性を求めよ。
3. 次に、上層 A（$E$）と下層 B（$2E$）が各厚さ $h$ の二層断面を考える。接合面を $y=0$ とし、中立面が接合面より下方にある距離を $h_0$ とする。図示の内表面の曲率半径 $R$ を用い、軸方向ひずみ・応力分布および $h_0$ を求めよ。
4. 二層断面の $M$ と $R$ の関係を求めよ。

![構造・座標の模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/sn-mechanics/materials/2021-6-geometry.svg)

#### 题目描述

长 $l$、宽 $b$ 的完全粘结组合悬臂梁，端部受使下缘受拉的纯弯矩 $M$。先考虑中央层厚 $2h$、模量 $E$，上下表层各厚 $h$、模量 $2E$，求轴向应变、应力分布和抗弯刚度。再考虑上层模量 $E$、下层 $2E$、各厚 $h$ 的双层梁；界面取向下坐标 $y=0$，求中性面偏移 $h_0$、分布及弯矩与内表面曲率半径 $R$ 的关系。

## **Kai**

### (1)・(2) 対称断面

中立面の曲率半径を $\rho$ とする。平面保持より $\varepsilon_x=y/\rho$ であり、

$$
\boxed{\sigma_x(y)=\begin{cases}Ey/\rho&|y|\le h,\\2Ey/\rho&h<|y|\le2h.\end{cases}}
$$

したがって曲げ剛性は

$$
D=bE\int_{-h}^{h}y^2\,dy+2bE\left(\int_{-2h}^{-h}y^2\,dy+\int_h^{2h}y^2\,dy\right)
=\boxed{10Ebh^3},\qquad M=\frac{D}{\rho}.
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
\boxed{\varepsilon_x=\frac{6y-h}{6R+7h}},\qquad
\boxed{\sigma_x=\begin{cases}E(6y-h)/(6R+7h)&-h\le y\le0,\\2E(6y-h)/(6R+7h)&0\le y\le h.\end{cases}}
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
