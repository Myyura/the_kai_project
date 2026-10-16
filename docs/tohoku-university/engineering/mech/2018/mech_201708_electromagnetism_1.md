---
sidebar_label: "2017年8月実施 電磁気学 第1問"
tags:
  - Tohoku-University
  - Physics.Electromagnetism.Magnetic-Dipole-Vector-Potential
  - Physics.Electromagnetism.Biot-Savart-Law
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 電磁気学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

真空中で $z$ 軸上の $z=s/2$、$z=-s/2$ にそれぞれ磁荷 $+q_m$、$-q_m$ を置いた磁気双極子と、$xy$ 平面上で原点を中心とする半径 $a$ の円形電流 $I$ を考える。電流は $+z$ 側から見て反時計回りである。磁気双極子モーメントを $\boldsymbol m=q_ms\boldsymbol e_z$ とし、真空の透磁率を $\mu_0$ とする。

1. 双極子と円形電流それぞれの磁力線を図示せよ。
2. 磁荷 $q_m$ から距離 $R$ の磁気スカラーポテンシャルが $q_m/(4\pi\mu_0R)$ であることを用いて、$z_1\gg s$ における軸上の磁場 $\boldsymbol H$ を求めよ。
3. ビオ・サバールの法則を用いて、$z_2\gg a$ における円形電流の軸上の磁束密度 $\boldsymbol B$ を求めよ。
4. 遠方に同じ磁場を作るための $m$ と $I$ の関係を求めよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

真空中 $z=\pm s/2$ 的磁荷 $\pm q_m$ 组成磁偶极子，定义 $\boldsymbol m=q_ms\boldsymbol e_z$。另有位于 $xy$ 平面、半径 $a$ 的圆电流，沿 $+z$ 方向看为逆时针。（1）分别画磁力线；（2）利用题定磁标势求 $z_1\gg s$ 处的 $H$；（3）利用毕奥–萨伐尔定律求 $z_2\gg a$ 处的 $B$；（4）求使远场相等的磁矩与电流关系。

## **Kai**

### (1)

![磁荷双極子の力線と円形電流の閉じた磁力線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_magnetic_lines.svg)

双極子では力線は正磁荷から負磁荷へ向かい、両磁荷の間では $-z$ 方向となる。円形電流では力線は閉曲線であり、円の内部では $+z$ 方向に通る。遠方での形は等しいが、中心付近の向きと力線の接続は異なる。

### (2)

$z>s/2$ の軸上のポテンシャルは

$$
\phi_m(z)=\frac{q_m}{4\pi\mu_0}\left(\frac1{z-s/2}-\frac1{z+s/2}\right)
\simeq\frac{q_ms}{4\pi\mu_0z^2}.
$$

対称性から横方向成分は相殺するので

$$
\boldsymbol H=-\frac{d\phi_m}{dz}\boldsymbol e_z
\simeq\boxed{\frac{m}{2\pi\mu_0z_1^3}\boldsymbol e_z}.
$$

### (3)

円周上の電流素片から軸上の点までの距離は $r=\sqrt{a^2+z_2^2}$。ビオ・サバールの法則の軸方向成分を積分すると

$$
B_z=\frac{\mu_0 I}{4\pi}\int_0^{2\pi}\frac{a^2\,d\theta}{(a^2+z_2^2)^{3/2}}
=\frac{\mu_0Ia^2}{2(a^2+z_2^2)^{3/2}}.
$$

従って $z_2\gg a$ では

$$
\boxed{\boldsymbol B\simeq\frac{\mu_0Ia^2}{2z_2^3}\boldsymbol e_z}.
$$

### (4)

同じ遠方点 $z_1=z_2=z$ で $\boldsymbol B=\mu_0\boldsymbol H$ を比較して

$$
\frac{m}{2\pi z^3}=\frac{\mu_0Ia^2}{2z^3},\qquad \boxed{m=\mu_0I\pi a^2}.
$$

ここでの $m=q_ms$ は磁荷による定義であり、単位は $\mathrm{Wb\,m}$ である。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 23ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
