---
sidebar_label: "2020年8月実施 流体力学 問2"
tags:
  - Hokkaido-University
  - Engineering.Fluid-Mechanics.Boundary-Layer-Integral-Method
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 流体力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

一様流速 $U_0$ に平行な長さ $\ell$ の薄い平板を考える。前縁を原点、板に沿う方向を $x$、上面から上向きを $y$ とし、紙面垂直方向に十分広い二次元流れとする。密度 $\rho$ と粘性係数 $\mu$ は一定である。後縁 $x=\ell$ の定常層流境界層の速度分布が

$$
u(\ell,y)=\begin{cases}
U_0[2(y/\delta)-(y/\delta)^2],&0\le y<\delta,\\
U_0,&y\ge\delta
\end{cases}
$$

で近似される。

1. 後縁の壁面摩擦応力 $\tau_w$ を求めよ。
2. 排除厚さ $\delta^*=\int_0^\infty(1-u/U_0)dy$ と運動量厚さ $\theta=\int_0^\infty(u/U_0)(1-u/U_0)dy$ を $\delta$ で表せ。
3. 紙面垂直方向の単位幅当たりの平板片面の摩擦抗力 $D_0=\rho U_0^2\theta$ を質量・運動量保存から導け。検査体積を図示して計算過程を説明せよ。圧力は一様としてよい。
4. $\tau_w=\tfrac12c_f\rho U_0^2$、$D_0b=\tfrac12C_f\rho U_0^2\ell b$ により定義される局所係数 $c_f$ と平均係数 $C_f$ を求めよ。
5. $\ell$ を固定し $U_0$ を増加させる。層流では $\delta/\ell\propto\mathrm{Re}^{-1/2}$（$\mathrm{Re}=\rho U_0\ell/\mu$）である。このとき $C_f\propto\mathrm{Re}^{[\text{ア}]}$、抗力 $\propto U_0^{[\text{イ}]}$ となる。$\mathrm{Re}$ が約 $10^6$ を超えて下流で乱流への遷移が起こると $C_f$ は［ウ］。さらに約 $10^7$ を超えてほぼ全面が乱流になると、$C_f$ は層流時に比べ［エ］へ転じ、抗力は $U_0$ の［オ］で増える。ア・イは数値、ウは「増加し／減少し／一定となり」、エは「穏やかな増加／穏やかな減少／急な増加／急な減少」、オは「2乗をやや上回る率／2乗をやや下回る率／1乗をやや上回る率／1乗をやや下回る率」から選べ。

#### 题目描述

均匀流 $U_0$ 平行流过长 $\ell$ 的薄平板，密度、黏度恒定，流动二维。后缘层流边界层内 $u/U_0=2y/\delta-(y/\delta)^2$，边界层外速度为 $U_0$。求壁面切应力、排挤厚度和动量厚度；画出控制体并由质量及动量守恒推导单位板宽的单面摩擦阻力 $D_0=\rho U_0^2\theta$；求题设定义的局部与平均摩擦系数。板长固定、速度增大时，根据层流边界层厚度比例 $\delta/\ell\propto\mathrm{Re}^{-1/2}$，求层流摩擦系数与阻力的幂指数；再选择过渡区和充分湍流区的变化趋势。转捩对应题设约 $10^6$，全板湍流约 $10^7$；选项与日文题面相同。

## **Kai**

### (1), (2)

$\eta=y/\delta$ とおくと

$$
\boxed{\tau_w=\mu\left.\frac{\partial u}{\partial y}\right|_{y=0}
=\frac{2\mu U_0}{\delta}}.
$$

$$
\boxed{\delta^*=\delta\int_0^1(1-\eta)^2d\eta=\frac\delta3},\qquad
\boxed{\theta=\delta\int_0^1(2\eta-\eta^2)(1-\eta)^2d\eta=\frac{2\delta}{15}}.
$$

### (3)

![境界層の運動量収支に用いる検査体積](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/hokkaido202008_fluid2_cv.svg)

前縁から後縁まで、板面から境界層外の高さ $H>\delta$ までの長方形を検査体積に取る。入口質量流量は $\rho U_0H$、後縁からは $\rho\int_0^H u\,dy$ が流出する。差は上面から流出し、その $x$ 方向速度は $U_0$ なので

$$
\dot m_{\rm top}=\rho\int_0^H(U_0-u)\,dy.
$$

圧力による正味の力はゼロであり、流体に働く板の摩擦力は $-D_0$。したがって

$$
-D_0=\rho\int_0^Hu^2dy+U_0\dot m_{\rm top}-\rho U_0^2H,
$$

$$
\boxed{D_0=\rho\int_0^Hu(U_0-u)dy=\rho U_0^2\theta
=\frac{2}{15}\rho U_0^2\delta}.
$$

上面は流線ではないため、上面を通る運動量流出を含める必要がある。

### (4)

定義式に代入して

$$
\boxed{c_f=\frac{4\mu}{\rho U_0\delta}},\qquad
\boxed{C_f=\frac{2\theta}{\ell}=\frac{4\delta}{15\ell}}.
$$

### (5)

層流では $C_f\propto\mathrm{Re}^{-1/2}\propto U_0^{-1/2}$ なので抗力は $U_0^{3/2}$ に比例する。遷移すると乱流部分の摩擦が増し、平均係数はいったん増加する。ほぼ全面が乱流になると、滑らかな平板の代表的な相関 $C_f\propto\mathrm{Re}^{-1/5}$ に従って緩やかに減少し、抗力はおおむね $U_0^{9/5}$ に比例する。したがって

$$
\boxed{\text{ア}=-\frac12,\quad\text{イ}=\frac32},
$$

- ウ：増加し
- エ：穏やかな減少
- オ：2乗をやや下回る率

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 9–10ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
