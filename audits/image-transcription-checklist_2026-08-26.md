# 原题图像与数据表转述手工核对清单

日期：2026-08-26

本文件只供人工复核，不属于 Kai 题解内容。`[ ]` 留给人工确认。

口径分为三类：本轮新增或补写的原题图形转述 10 篇、涉及原题表格/电子表格的转写或压缩转述 4 篇，以及本轮只校正答案而保留既有视觉转述的 2 篇。

## 1. 本轮新增或补写的原题图形转述（10 篇）

| 核对 | 题目 | 原图内容 | Kai 中的转述方式 | 人工核对重点 | 原题 |
|---|---|---|---|---|---|
| [ ] | [一桥大学 经济学研究科 2022 统计学・计量经济学 第2题・选答3](../docs/hitotsubashi-university/economics/2022/economics_2022_statistics_2_3.md) | 一期间二项树：股票从 100 到 140/90，安全证券从 1 到 $R$，上下状态概率各 $1/2$ | Markdown 状态表 | 两个状态、概率、$S_1$、$B_1$ 是否与树完全对应 | [官方 PDF](https://www1.econ.hit-u.ac.jp/office/bosyu/kakomon/kakomon_s2022.pdf) |
| [ ] | [广岛大学 先进理工系科学研究科 2023 物理专业1](../docs/hiroshima-university/ASE/phys/2023/phys_202208_senmon_1.md) | 三质点、三弹簧、竖直刚杆、杆中点与 $m_3$ 相连的装置图 | 保留原图，并用 ASCII 重建连接关系 | $m_1,m_2,m_3$ 的位置、三根弹簧的端点、杆长 $2a$、中点位移 $(x_1+x_2)/2$ | [原图裁片](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hiroshima_university/ASE/phys_202208_1_p1.png) |
| [ ] | [九州大学 ISEE 2024 共通・解析学](../docs/kyushu-university/ISEE/kyotsu/2024/kyotsu_202308_analysis_calculus.md) | 上半圆闭路 $C$ 及行进方向 | 保留原图，并写成实轴段与上半圆参数化 | 实轴是否为 $-R\to R$，圆弧是否为 $z=Re^{i\theta}$、$0\le\theta\le\pi$，整体是否逆时针 | [原图裁片](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/kyotsu_2024_analysis_calculus_p1.png) |
| [ ] | [京都大学 生物科学 2026 问题18](../docs/kyoto-university/science/bio/2026/bio_202508_18.md) | Otto 循环的 $P$–$V$ 图，状态 1–4 | 用四段过程链和状态量文字转述 | $1\to2$ 绝热压缩、$2\to3$ 等容加热、$3\to4$ 绝热膨胀、$4\to1$ 等容冷却；注意当前未复刻曲线几何外形 | [官方 PDF，第41页](https://www.biol.sci.kyoto-u.ac.jp/wp-content/uploads/2025/08/dd193e3aad0aa3d65e32524f2120b302.pdf#page=41) |
| [ ] | [东京大学 学际信息学府 2025 综合分析信息 第2问](../docs/tokyo-university/III/applied_computer_science/2025/applied_computer_science_202408_2.md) | 楼顶、物体、水平初速 $v_0$、向右 $x$ 轴、向下 $y$ 轴 | 压成题意文字，没有另画 ASCII 图 | 坐标正方向、初速度方向、物体初始位置是否无歧义 | [官方 PDF，印刷页 A-3](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2025/03/2025bunseki.pdf#page=4) |
| [ ] | [东京大学 智能机械信息学 2020 问题1](../docs/tokyo-university/IST/imi/2020/imi_201908_1_1.md) | 均匀杆、转轴 $O$、重心 $G$、长度标记和摆角 $\theta$ | ASCII 杆摆图 | $O,G,l,2L,\theta$ 的相对位置以及角度基准线 | [官方 PDF](https://www.i.u-tokyo.ac.jp/edu/course/m-i/pdf/2020imi.pdf) |
| [ ] | [东京大学 都市工学 2025 B-2 水理学](../docs/tokyo-university/engineering/urban/2025/urban_202408_B2_3.md) | 问题3的三角堰断面 | ASCII 断面图 | 自由表面、总水深 $H$、局部深度 $z$、薄层 $dz$、宽度 $b$、开角 $\theta$ | [官方 PDF](https://www.due.t.u-tokyo.ac.jp/wp/wp-content/uploads/2025/03/B2024.pdf) |
| [ ] | [东北大学 地学 2025 问题B](../docs/tohoku-university/science/earth/2025/earth_202408_B_1.md) | 问2地温—深度/永久冻土图；问3含 J、K、L、M 的地形图 | 两组 ASCII 加文字判读特征 | 这是压缩转述：重点核对 E/F 分层、温度振幅随深度变化、J/K 高低关系、L–M 急崖及水系/地形线错移；未复刻完整等高线 | [官方 PDF](https://www.es.tohoku.ac.jp/JP/wp-content/uploads/2025/02/2025Master_ABC.pdf) |
| [ ] | [东北大学 天文学 2025 物理(4)](../docs/tohoku-university/science/astron/2025/astron_202408_phys_4_1.md) | 问2(h) X 射线吸收谱曲线及三支箭头 | Markdown 表，只保留约 28、55、80 keV 三个特征能量 | 三个箭头读数；当前未复刻连续谱线形状 | [官方 PDF](https://www.astr.tohoku.ac.jp/examinee/pdf/exam07.pdf) |
| [ ] | [东京大学 生物科学 2025 第4问](../docs/tokyo-university/science/bio/2025/bio_202408_4.md) | 图1物种树及比较表、表1距离矩阵、四个系统树选项、图2三幅频率分布图 | 关键数字、括号/Newick 式树形和曲线形状文字 | **优先核对**：这是最压缩的一篇；确认图1的物种关系与数值、距离矩阵、候选（ア）的完整拓扑，以及三幅分布图的形状没有被过度省略 | [官方 PDF，第18–21页](https://www.bs.s.u-tokyo.ac.jp/media/files/kakomon/2025bs_exam.pdf#page=18) |

## 2. 本轮新增或重写的原题表格/电子表格转述（4 篇）

| 核对 | 题目 | 原表内容 | Kai 中的转写方式 | 人工核对重点 | 原题 |
|---|---|---|---|---|---|
| [ ] | [筑波大学 信息理工学位项目 入试问题例・编程基础](../docs/tsukuba-university/science_and_technology/sie/sie_cs_sample.md) | selection sort 程序及带黑块、(a)–(d) 的四行输出表 | 程序代码块与 Markdown 表 | 程序循环范围、交换顺序、五列位置、黑块及 (a)–(d) 所在格 | [官方 PDF](https://www.cs.tsukuba.ac.jp/admission/problem.pdf) |
| [ ] | [东京大学 生物统计信息学 2025 第1问](../docs/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1.md) | (1-1) 身高表、(1-4) 两点分布表、(1-7)/(1-10) 联合分布表、(1-12) 暴露—疾病—人年表 | (1-7)/(1-10) 用 LaTeX `array`；其余压成行内数字 | **逐格核对**各分数/概率/人数/人年；当前 (1-12) 只保留计算所需的病例数和人年，没有逐格复刻总计 | [官方 PDF，印刷页 B-1–B-6](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2025/03/2025toukei.pdf#page=2) |
| [ ] | [东京大学 生物统计信息学 2026 第1问](../docs/tokyo-university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1.md) | (1-1) 得分表、(1-4) 三点分布表、(1-12) 暴露×疾病 $2\times2$ 表 | 全部压成行内数字 | **逐格核对**十个得分、$p,q,1-p-q$、45/15/3850/2310；当前未复刻原表版式和合计列 | [官方 PDF，印刷页 B-1–B-6](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2026/05/2026smtoukei.pdf#page=2) |
| [ ] | [东京大学 CBMS 2026 问题1B](../docs/tokyo-university/frontier_sciences/cbms/2026/cbms_202508_1_B.md) | (9) 成绩电子表格；(10) 检查结果×真实状态的混淆矩阵 | (9) 只写单元格职责与答案公式；(10) 只保留 $A$、假阴性 20 和敏感度 0.8 | **优先核对**：当前没有重建两张原表；(9) 省略 Alice/Bob/Chris 的 60、90、30、80、76、70，(10) 省略假阳性 10、真阴性 190；检查是否应补成 Markdown 表 | [官方 PDF](https://www.cbms.k.u-tokyo.ac.jp/media/files/past/2026A_CBMS_Jp.pdf) |

## 3. 既有视觉转述，本轮没有新增（2 篇）

这两篇也在本轮修改文件中，但本轮只校正答案；下面的原图/原表转述是原文件已有内容。

| 核对 | 题目 | 既有转述 | 本轮实际改动 |
|---|---|---|---|
| [ ] | [北海道大学 情报科学院 2023 专业2・问题2](../docs/hokkaido-university/IST/joele/2023/joele_202208_senmon2_2.md) | 保留势能图，并写明 $x<0$ 为无限势垒、$x\ge0$ 时 $V(x)=v_0x$；[原图裁片](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hokkaido_university/IST/joele/joele_202208_senmon2_2_p1.png) | 修正量子力学计算，没有改图像转述 |
| [ ] | [庆应义塾大学 MBA 2024 问题1](../docs/keio-university/business/2024/mba_202310_1.md) | 三次考试成绩与平均分已是 Markdown 表 | 只修正整数规划枚举表的一行，没有改原题成绩表 |

## 4. 不属于“原题给定图片转述”的作答图

以下内容也应检查画得是否能读懂，但它们是题目要求考生在答案中作图，不是把原题输入图转述出来：

- [广岛大学 物理专业1](../docs/hiroshima-university/ASE/phys/2023/phys_202208_senmon_1.md)：欠阻尼、过阻尼曲线以及三种固有振动模式。
- [东京大学 智能机械信息学 2020 问题1](../docs/tokyo-university/IST/imi/2020/imi_201908_1_1.md)：多数决真值表与四个 NAND 门的回路。
- [东京大学 都市工学 2025 B-2 水理学](../docs/tokyo-university/engineering/urban/2025/urban_202408_B2_3.md)：Venturi 管结构图。
- [大阪公立大学 物理 2025 II-2](../docs/osaka-metropolitan-university/science/physics/2025/physics_II_2.md)：$ax$ 与 $\tanh x$ 的交点情形；原题要求考生图示，题面没有给定曲线图。
