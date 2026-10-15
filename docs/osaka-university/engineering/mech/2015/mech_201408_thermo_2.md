---
sidebar_label: "2015年度 問題2（熱工学）"
tags:
  - Osaka-University
  - Engineering.Heat-Transfer.Cylindrical-Conduction
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
---

# 大阪大学 工学研究科 機械工学専攻 2015年度 熱工学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

無限に長い円形銅線を絶縁体で被覆し、周囲温度 $T_0$ の空気中に置く。銅線の半径は $r_1$、被覆の外半径は $r_2$、熱伝導率はそれぞれ $\lambda_1,\lambda_2$ である。銅線内部には一様な単位体積当たりの発熱量 $w$ があり、被覆内部には発熱がない。外表面の熱伝達率は $h$ とする。定常状態を考え、物性値は一定、接触熱抵抗は無視する。

![原題の銅線と被覆の断面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2015/mech_201408_thermo_2-question-fig1.png)

1. 銅線と被覆の境界、および被覆外表面での熱流束を求めよ。
2. 被覆外表面の温度を求めよ。
3. 銅線と被覆の境界温度を求めよ。
4. 銅線中心の温度を求めよ。

#### 题目描述

无限长铜线半径为 $r_1$、导热系数为 $\lambda_1$，外覆绝缘层至半径 $r_2$，导热系数为 $\lambda_2$。铜线内均匀体积发热率为 $w$，绝缘层不发热，接触热阻忽略。周围空气温度为 $T_0$，外表面对流换热系数为 $h$，物性恒定且处于稳态。求两界面的热流密度、外表面温度、铜线与绝缘层界面温度，以及铜线中心温度。

## **Kai**

### (1)

単位長さ当たりの発熱量は $w\pi r_1^2$ である。半径 $r$ の面を通る外向き熱流束は、被覆内で $q_r=w r_1^2/(2r)$ となるので

$$
\boxed{q_r(r_1)=\frac{wr_1}{2}},\qquad
\boxed{q_r(r_2)=\frac{wr_1^2}{2r_2}}.
$$

### (2)

被覆外表面の温度を $T_s$ とすると $h(T_s-T_0)=q_r(r_2)$ だから

$$
\boxed{T_s=T_0+\frac{wr_1^2}{2hr_2}}.
$$

### (3)

被覆内で $-\lambda_2\,dT/dr=wr_1^2/(2r)$ を積分する。界面温度 $T_b$ は

$$
\boxed{T_b=T_s+\frac{wr_1^2}{2\lambda_2}\log\frac{r_2}{r_1}}.
$$

### (4)

銅線内では半径 $r$ までの発熱量から $q_r=wr/2$ である。したがって

$$
T(r)=T_b+\frac{w}{4\lambda_1}(r_1^2-r^2),
$$

よって中心温度は

$$
\boxed{T(0)=T_0+\frac{wr_1^2}{2hr_2}
+\frac{wr_1^2}{2\lambda_2}\log\frac{r_2}{r_1}
+\frac{wr_1^2}{4\lambda_1}}.
$$
