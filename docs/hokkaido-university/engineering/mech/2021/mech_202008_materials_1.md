---
sidebar_label: "2020年8月実施 材料力学 問1"
tags:
  - Hokkaido-University
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 材料力学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

図1のように，長さ $L$，外径 $d_1$，内径 $d_2$ の断面が一様な円管の端面 A と B を剛体壁に固定した。次に，端面 A から $e$ の位置にある断面 C にねじりモーメント $T$ を円管の中心軸まわりに作用させ，さらに円管の温度を $t$ だけ上昇させた。ただし $e<L/2$ であり，円管の縦弾性率を $E$，横弾性率を $G$，線膨張係数を $\alpha$ とし，円管の半径方向の熱ひずみの拘束の影響を無視する。また，部材の質量は考えなくてよい。以下の問いに答えなさい。

![図1 両端を固定した円管](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_materials_1_original_figure_1.png)

(1) この円管の断面二次極モーメントを求めなさい。

(2) 断面 C のねじれ角を求めなさい。

(3) 円管に生じる最大のせん断応力の大きさ，およびその方向が中心軸方向となす角度を求めなさい。

### 题目描述

如图1，将长度为 $L$、外径为 $d_1$、内径为 $d_2$、截面均匀的圆管两端面 A、B 固定在刚性墙上。然后在距 A 端面 $e$ 的截面 C 处绕圆管中心轴施加扭矩 $T$，并使圆管温度升高 $t$。已知 $e<L/2$，圆管的杨氏模量为 $E$，剪切模量为 $G$，线膨胀系数为 $\alpha$。忽略圆管径向热应变受约束的影响，且不计构件质量。回答下列问题。

(1) 求圆管截面的极惯性矩。

(2) 求截面 C 的扭转角。

(3) 求圆管中最大剪应力的大小，以及其方向与中心轴方向之间的夹角。

## **Kai**

### (1)

$$
\boxed{I_p=\int_{d_2/2}^{d_1/2}r^2(2\pi r)\,dr
=\frac\pi{32}(d_1^4-d_2^4)}.
$$

### (2)

両壁の反力トルクの大きさを $T_A,T_B$ とする。つり合いと回転変位の適合条件は

$$
T_A+T_B=T,\qquad T_Ae=T_B(L-e).
$$

したがって $T_A=T(L-e)/L,T_B=Te/L$ であり、Cは $T$ の方向へ

$$
\boxed{\phi_C=\frac{Te(L-e)}{GI_pL}
=\frac{32Te(L-e)}{\pi GL(d_1^4-d_2^4)}}
$$

だけ回転する。

### (3)

$e<L/2$ よりAC側の外表面でねじりせん断応力が最大となり、その大きさは

$$
\tau_0=\frac{T_A(d_1/2)}{I_p}
=\frac{16T(L-e)d_1}{\pi L(d_1^4-d_2^4)}.
$$

軸方向ひずみが拘束されるので $0=\sigma_x/E+\alpha t$、すなわち $\sigma_x=-E\alpha t$。周方向の垂直応力はゼロである。$q=E\alpha t$ と書くと、面内主応力は

$$
\sigma_{1,2}=-\frac q2\pm\sqrt{\frac{q^2}{4}+\tau_0^2}.
$$

第三主応力0は両者の間にあるため、三次元の最大せん断応力も

$$
\boxed{\tau_{\max}=\sqrt{\left(\frac{E\alpha t}{2}\right)^2+
\left[\frac{16T(L-e)d_1}{\pi L(d_1^4-d_2^4)}\right]^2}}.
$$

局所的な周方向を $\tau_{x\theta}=\tau_0>0$ となるように取る。軸から角 $\phi$ の法線をもつ面のせん断応力は $\tau(\phi)=(q/2)\sin2\phi+\tau_0\cos2\phi$。その極大条件から

$$
\boxed{\phi=\frac12\tan^{-1}\frac{E\alpha t}{2\tau_0}}
\quad(0\le\phi\le\pi/4).
$$

最大せん断応力の二つの直交する方向は、軸から $\phi$ と $\phi+\pi/2$ の方向である。トルクの向きを逆転すれば傾く側も逆になる。

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 2ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
