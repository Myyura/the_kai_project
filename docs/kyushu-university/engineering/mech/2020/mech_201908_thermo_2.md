---
sidebar_label: "2019年8月実施 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Thermal-Radiation
---

# 九州大学 工学府 機械系専攻 2019年8月実施 熱工学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

厚さ $L$、一定熱伝導率 $k$ の発熱体が真空層を挟んで固体壁と向き合う。発熱体は $0\le x\le L$ を占め、奥行き・鉛直方向は無限である。左面 $x=0$ は断熱され、内部では単位体積当たり $H\,[\mathrm{W/m^3}]$ で一様に発熱する。左面・右面の温度を $T_0,T_1$、一定に保たれる固体壁の温度を $T_2$ とする。右面（面 1）と壁（面 2）の放射率を $\varepsilon_1,\varepsilon_2$ とし、熱流束は

$$
q_{12}=\frac{\sigma(T_1^4-T_2^4)}{1/\varepsilon_1+1/\varepsilon_2-1}
\quad[\mathrm{W/m^2}]
$$

で与えられる。$\sigma$ は Stefan–Boltzmann 定数。定常問題として扱い、$H,L,k,\sigma$ のいずれかを用いて答えよ。

1. $q_{12}$ を求めよ。
2. 一次元定常熱伝導方程式を解き、$T_0-T_1$ を求めよ。
3. $\varepsilon_1=\varepsilon_2=1/8$、$T_1=2T_2$ のとき $T_1$ を求めよ。

次に (3) の状態から真空層に非常に薄い板を挿入した。発熱体右面温度は $T_{1b}$、板温度は $T_3$ となった。板の放射率は両側とも $1/8$ で、内部温度は均一とする。

4. 板から壁への熱流束 $q_{32}$ を求めよ。
5. $T_3$ を求めよ。
6. $T_{1b}/T_1$ を有効数字 3 桁で求めよ。$\sqrt[4]{31}\simeq2.36$ を用いてよい。

#### 题目描述

厚度 $L$、导热率 $k$ 恒定的无限大平板内，均匀体积发热率为 $H$。左面绝热，左右表面温度为 $T_0,T_1$；右侧隔着真空面对温度保持 $T_2$ 的固体壁。两面辐射率为 $\varepsilon_1,\varepsilon_2$，辐射热流为 $q_{12}=\sigma(T_1^4-T_2^4)/(1/\varepsilon_1+1/\varepsilon_2-1)$。按稳态计算。① 求热流。② 解导热方程求 $T_0-T_1$。③ 若两面辐射率均为 $1/8$ 且 $T_1=2T_2$，求 $T_1$。随后在真空中插入两面辐射率同为 $1/8$ 的等温薄板，板温为 $T_3$，发热体右面变为 $T_{1b}$。④ 求板至壁的热流。⑤ 求板温。⑥ 求插板前后右面温度之比，保留三位有效数字。

## **Kai**

### (1)

左面断熱、定常であるため、発熱の全量が右面から出る。

$$
\boxed{q_{12}=HL\quad[\mathrm{W/m^2}]}.
$$

### (2)

$$
kT''+H=0,\qquad T'(0)=0,\qquad T(0)=T_0
$$

を積分すると $T(x)=T_0-Hx^2/(2k)$。したがって

$$
\boxed{T_0-T_1=\frac{HL^2}{2k}}.
$$

### (3)

放射抵抗は $8+8-1=15$、$T_2^4=T_1^4/16$ なので

$$
HL=\frac{\sigma(1-1/16)T_1^4}{15}=\frac{\sigma T_1^4}{16}.
$$

よって

$$
\boxed{T_1=2\left(\frac{HL}{\sigma}\right)^{1/4}},\qquad
T_2=\left(\frac{HL}{\sigma}\right)^{1/4}.
$$

### (4)

薄板にも定常のエネルギー収支を適用すると、入る熱と出る熱が等しい。

$$
\boxed{q_{32}=HL\quad[\mathrm{W/m^2}]}.
$$

### (5)

$$
HL=\frac{\sigma(T_3^4-T_2^4)}{15},\qquad\sigma T_2^4=HL
$$

より $\sigma T_3^4=16HL$。したがって

$$
\boxed{T_3=2\left(\frac{HL}{\sigma}\right)^{1/4}}.
$$

### (6)

発熱体と薄板の間も同じ熱流束・放射抵抗なので

$$
\sigma(T_{1b}^4-T_3^4)=15HL,\qquad
\sigma T_{1b}^4=31HL.
$$

よって

$$
\boxed{\frac{T_{1b}}{T_1}=\left(\frac{31}{16}\right)^{1/4}
=\frac{\sqrt[4]{31}}2\simeq1.18}.
$$

## **Reference**

- [九州大学 2020年度 熱工学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-thermo.pdf)
