<template>
  <div>
    <div
      v-loading.fullscreen.lock="fullscreenLoading"
      class="main-article"
      element-loading-text="正在生成预览界面"
      id="print"
    >
      <div class="main-title">装配式钢结构体系建筑一体化集成建造评价系统评分表</div>

      <!-- 主表 -->
      <table cellpadding="10" cellspacing="0" width="100%" border="1">
        <tr align="center">
          <td style="font-weight:bold" width="25%" colspan="2">工程项目名称</td>
          <td colspan="5"></td>
        </tr>
        <tr align="center">
          <td style="font-weight:bold" width="25%" colspan="2">申请评价方</td>
          <td colspan="5"></td>
        </tr>
        <tr align="center">
          <td style="font-weight:bold" width="25%" colspan="2">评价阶段</td>
          <td colspan="2">
            <p>
              <input
                type="checkbox"
                name="design"
                value="design"
                checked="checked"
                disabled="false"
              />&nbsp;设计评价
            </p>
            <p>
              <input
                type="checkbox"
                name="construct"
                value="construct"
                checked="checked"
                disabled="false"
              />&nbsp;建造评价
            </p>
            <p>
              <input type="checkbox" name="usage" value="usage" checked="checked" disabled="false" />&nbsp;运维评价
            </p>
          </td>
          <td style="font-weight:bold" width="20%">建筑类型</td>
          <td colspan="2">
            <p>
              <input type="checkbox" name="live" value="live" checked="checked" disabled="false" />&nbsp;居住建筑
            </p>
            <p>
              <input
                type="checkbox"
                name="public"
                value="public"
                checked="checked"
                disabled="false"
              />&nbsp;公共建筑
            </p>
            <p>
              <input
                type="checkbox"
                name="factory"
                value="factory"
                checked="checked"
                disabled="false"
              />&nbsp;厂&nbsp;&nbsp;房
            </p>
          </td>
        </tr>
        <tr align="center">
          <td style="font-weight:bold" colspan="2">评价指标</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr align="center">
          <td rowspan="2" style="font-weight:bold">控制项</td>
          <td>评定结果</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr align="center">
          <td>说明</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr align="center">
          <td rowspan="4" style="font-weight:bold">评分项</td>
          <td>权重</td>
          <td>0.21</td>
          <td>0.24</td>
          <td>0.20</td>
          <td>0.17</td>
          <td>0.18</td>
        </tr>
        <tr align="center">
          <td>适用总分</td>
          <td>100.00</td>
          <td>97.00</td>
          <td>90.00</td>
          <td>75.00</td>
          <td>89.00</td>
        </tr>
        <tr align="center">
          <td>实际得分</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr align="center">
          <td>得分Qi</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr align="center">
          <td style="font-weight:bold" rowspan="2">加分项</td>
          <td>得分Qs</td>
          <td colspan="5"></td>
        </tr>
        <tr align="center">
          <td>说明</td>
          <td colspan="5"></td>
        </tr>
        <tr align="center">
          <td colspan="2" style="font-weight:bold">总得分∑Q</td>
          <td colspan="5"></td>
        </tr>
        <tr align="center">
          <td colspan="2" style="font-weight:bold">建筑等级</td>
          <td colspan="5">
            <div class="types">
              <input type="checkbox" name="A" value="A" disabled="false" />&nbsp;A级
            </div>
            <div class="types">
              <input type="checkbox" name="B" value="B" disabled="false" />&nbsp;B级
            </div>
            <div class="types">
              <input type="checkbox" name="C" value="C" disabled="false" />&nbsp;C级
            </div>
            <div class="types">
              <input type="checkbox" name="D" value="D" disabled="false" />&nbsp;D级
            </div>
            <div class="types">
              <input type="checkbox" name="E" value="E" disabled="false" />&nbsp;E级
            </div>
          </td>
        </tr>
        <tr align="center">
          <td colspan="2" style="font-weight:bold">评价结果说明</td>
          <td colspan="5"></td>
        </tr>
        <tr align="center">
          <td colspan="2" style="font-weight:bold">评价机构</td>
          <td colspan="2"></td>
          <td>评价时间</td>
          <td colspan="2"></td>
        </tr>
      </table>

      <!-- 设计阶段 -->
      <div class="table-title">2.2.1 标准化设计</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11%">评价项目</th>
          <th width="35%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>模数协调</td>
          <td>建筑设计采用统一模数协调尺寸，并符合现行国家标准《建筑模数协调标准GB/T50002》的有关规定</td>
          <td>2</td>
          <td>{{design._2_2_1[0].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[0].children_question[0].score}}</td>
          <td>{{design._2_2_1[0].children_question[0].discription}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>建筑单元</td>
          <td>
            在单体住宅建筑中重复使用量最多的三个基本户型的面积之和占总建筑面积的比例不低于70%
            <br />在单体公共建筑中重复使用最多的三个基本单元的面积之和占总建筑面积的比例不低于60%。
          </td>
          <td>4</td>
          <td>{{design._2_2_1[1].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[1].children_question[0].score}}</td>
          <td>{{design._2_2_1[1].children_question[0].discription}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>平面布局</td>
          <td>各功能空间布局合理、规则有序，符合建筑功能和结构抗震安全要求。</td>
          <td>2</td>
          <td>{{design._2_2_1[2].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[2].children_question[0].score}}</td>
          <td>{{design._2_2_1[2].children_question[0].discription}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>连接节点</td>
          <td>连接节点具备标准化设计，符合安全、经济、方便施工等要求。</td>
          <td>2</td>
          <td>{{design._2_2_1[3].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[3].children_question[0].score}}</td>
          <td>{{design._2_2_1[3].children_question[0].discription}}</td>
        </tr>
        <tr align="center">
          <td rowspan="5">5</td>
          <td rowspan="5">预制构件</td>
          <td>预制梁、预制柱、预制外承重墙板、内承重墙板、外挂墙板在单体建筑中重复使用最多的三个规格构件的总个数占同类构件总个数的比例均不低于50%。</td>
          <td>3</td>
          <td>{{design._2_2_1[4].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[4].children_question[0].score}}</td>
          <td>{{design._2_2_1[4].children_question[0].discription}}</td>
        </tr>
        <tr align="center">
          <td>预制楼板、预制叠合楼板在单体建筑中重复使用量最多的三个规格构件的总个数占预制楼板总数的比例不低于60%。</td>
          <td>2</td>
          <td>{{design._2_2_1[4].children_question[1].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[4].children_question[1].score}}</td>
          <td>{{design._2_2_1[4].children_question[1].discription}}</td>
        </tr>
        <tr align="center">
          <td>预制楼梯在单体建筑中重复使用最多的一个规格的总个数占楼梯总个数的比例不低于70%。</td>
          <td>2</td>
          <td>{{design._2_2_1[4].children_question[2].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[4].children_question[2].score}}</td>
          <td>{{design._2_2_1[4].children_question[2].discription}}</td>
        </tr>
        <tr align="center">
          <td>预制内隔墙板在单体建筑中重复使用量最多的一个规格构件的面积之和占同类型墙板总面积的比例不低于50%。</td>
          <td>2</td>
          <td>{{design._2_2_1[4].children_question[3].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[4].children_question[3].score}}</td>
          <td>{{design._2_2_1[4].children_question[3].discription}}</td>
        </tr>
        <tr align="center">
          <td>预制阳台板在单体建筑中重复使用量最多的一个规格构件的总个数占阳台板总数的比例不低于50%。</td>
          <td>1</td>
          <td>{{design._2_2_1[4].children_question[4].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[4].children_question[4].score}}</td>
          <td>{{design._2_2_1[4].children_question[4].discription}}</td>
        </tr>
        <tr align="center">
          <td rowspan="2">6</td>
          <td rowspan="2">建筑部品</td>
          <td>外墙在单体建筑中重复使用量最多的三个规格的总个数占外墙总数量的比例不低于60%。</td>
          <td>2</td>
          <td>{{design._2_2_1[5].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[5].children_question[0].score}}</td>
          <td>{{design._2_2_1[5].children_question[0].discription}}</td>
        </tr>
        <tr align="center">
          <td>集成卫生间、整体橱柜、储物间等室内建筑部品在单体建筑中重复使用量最多的三个规格的总个数占同类部品总数量的比例不低于70%，并采用标准化接口、工厂化生产、装配化施工。</td>
          <td>2</td>
          <td>{{design._2_2_1[5].children_question[1].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_1[5].children_question[1].score}}</td>
          <td>{{design._2_2_1[5].children_question[1].discription}}</td>
        </tr>
      </table>

      <div class="table-title">2.2.2 钢结构建筑构件预制率</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11%" colspan="2">评价项目</th>
          <th width="35%">单位</th>
          <th width="11%">设定分值</th>
          <th width="11%">指标达成率</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td rowspan="3">1</td>
          <td rowspan="3">外墙板</td>
          <td rowspan="3">预制外挂墙板、预制复合墙板</td>
          <td>预制率≥80%</td>
          <td>6</td>
          <td rowspan="3">{{design._2_2_2[0].indicator}}%</td>
          <td rowspan="3">{{design._2_2_2[0].score}}</td>
          <td rowspan="3">{{design._2_2_2[0].description}}</td>
        </tr>
        <tr align="center">
          <td>60%≤预制率＜80%</td>
          <td>4</td>
        </tr>
        <tr align="center">
          <td>50%≤预制率＜65%</td>
          <td>3</td>
        </tr>

        <tr align="center">
          <td rowspan="3">2</td>
          <td rowspan="3">楼板</td>
          <td rowspan="3">预制（叠合）楼板</td>
          <td>预制率≥80%</td>
          <td>6</td>
          <td rowspan="3">{{design._2_2_2[1].indicator}}%</td>
          <td rowspan="3">{{design._2_2_2[1].score}}</td>
          <td rowspan="3">{{design._2_2_2[1].description}}</td>
        </tr>
        <tr align="center">
          <td>60%≤预制率＜80%</td>
          <td>4</td>
        </tr>
        <tr align="center">
          <td>50%≤预制率＜65%</td>
          <td>2</td>
        </tr>

        <tr align="center">
          <td rowspan="3">3</td>
          <td rowspan="3">其他</td>
          <td rowspan="3">楼梯、空调板。阳台板</td>
          <td>预制率≥80%</td>
          <td>6</td>
          <td rowspan="3">{{design._2_2_2[2].indicator}}%</td>
          <td rowspan="3">{{design._2_2_2[2].score}}</td>
          <td rowspan="3">{{design._2_2_2[2].description}}</td>
        </tr>
        <tr align="center">
          <td>60%≤预制率＜80%</td>
          <td>3</td>
        </tr>
        <tr align="center">
          <td>50%≤预制率＜65%</td>
          <td>2</td>
        </tr>
      </table>

      <div class="table-title">2.2.3 主体结构构件采用国际构件比例</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11%">评价项目</th>
          <th width="35%">评价指标</th>
          <th width="11%">设定分值</th>
          <th width="11%">项目比例</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td rowspan="3">1</td>
          <td rowspan="3">柱</td>
          <td>采用国标轧制构件比例 Ss≥80%</td>
          <td>5</td>
          <td rowspan="3">{{design._2_2_3[0].indicator}}%</td>
          <td rowspan="3">{{design._2_2_3[0].score}}</td>
          <td rowspan="3">{{design._2_2_3[0].description}}</td>
        </tr>
        <tr align="center">
          <td>采用国标轧制构件比例 60%≤Ss＜80%</td>
          <td>3</td>
        </tr>
        <tr align="center">
          <td>采用国标轧制构件比例 50%≤Ss＜65%</td>
          <td>2</td>
        </tr>

        <tr align="center">
          <td rowspan="3">2</td>
          <td rowspan="3">梁</td>
          <td>采用国标轧制构件比例 Ss≥80%</td>
          <td>6</td>
          <td rowspan="3">{{design._2_2_3[1].indicator}}%</td>
          <td rowspan="3">{{design._2_2_3[1].score}}</td>
          <td rowspan="3">{{design._2_2_3[1].description}}</td>
        </tr>
        <tr align="center">
          <td>采用国标轧制构件比例 60%≤Ss＜80%</td>
          <td>4</td>
        </tr>
        <tr align="center">
          <td>采用国标轧制构件比例 50%≤Ss＜65%</td>
          <td>2</td>
        </tr>

        <tr align="center">
          <td rowspan="3">3</td>
          <td rowspan="3">支撑</td>
          <td>采用国标轧制构件比例 Ss≥80%</td>
          <td>3</td>
          <td rowspan="3">{{design._2_2_3[2].indicator}}%</td>
          <td rowspan="3">{{design._2_2_3[2].score}}</td>
          <td rowspan="3">{{design._2_2_3[2].description}}</td>
        </tr>
        <tr align="center">
          <td>采用国标轧制构件比例 60%≤Ss＜80%</td>
          <td>2</td>
        </tr>
        <tr align="center">
          <td>采用国标轧制构件比例 50%≤Ss＜65%</td>
          <td>1</td>
        </tr>
      </table>

      <div class="table-title">2.2.4 装配率</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11%">评价项目</th>
          <th width="35%">评价单位</th>
          <th width="11%">设定分值</th>
          <th width="11%">装配率</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td rowspan="2">1</td>
          <td rowspan="2">非承重内隔墙</td>
          <td>装配率(面积比）≥70%</td>
          <td>4</td>
          <td rowspan="2">{{design._2_2_4[0].indicator}}%</td>
          <td rowspan="2">{{design._2_2_4[0].score}}</td>
          <td rowspan="2">{{design._2_2_4[0].description}}</td>
        </tr>
        <tr align="center">
          <td>装配率(面积比）＜70%</td>
          <td>2</td>
        </tr>

        <tr align="center">
          <td rowspan="2">2</td>
          <td rowspan="2">集成式厨房</td>
          <td>装配率(面积比）≥70%</td>
          <td>3</td>
          <td rowspan="2">{{design._2_2_4[1].indicator}}%</td>
          <td rowspan="2">{{design._2_2_4[1].score}}</td>
          <td rowspan="2">{{design._2_2_4[1].description}}</td>
        </tr>
        <tr align="center">
          <td>装配率(面积比）＜70%</td>
          <td>1</td>
        </tr>

        <tr align="center">
          <td rowspan="2">3</td>
          <td rowspan="2">集成式卫生间</td>
          <td>装配率(面积比）≥70%</td>
          <td>3</td>
          <td rowspan="2">{{design._2_2_4[2].indicator}}%</td>
          <td rowspan="2">{{design._2_2_4[2].score}}</td>
          <td rowspan="2">{{design._2_2_4[2].description}}</td>
        </tr>
        <tr align="center">
          <td>装配率(面积比）＜70%</td>
          <td>1</td>
        </tr>

        <tr align="center">
          <td>4</td>
          <td>预制管道井</td>
          <td>装配率(数量比）≥50%</td>
          <td>2</td>
          <td>{{design._2_2_4[3].indicator}}%</td>
          <td>{{design._2_2_4[3].score}}</td>
          <td>{{design._2_2_4[3].description}}</td>
        </tr>

        <tr align="center">
          <td>5</td>
          <td>预制排烟道</td>
          <td>装配率(数量比）≥50%</td>
          <td>1</td>
          <td>{{design._2_2_4[4].indicator}}%</td>
          <td>{{design._2_2_4[4].score}}</td>
          <td>{{design._2_2_4[4].description}}</td>
        </tr>

        <tr align="center">
          <td>6</td>
          <td>护栏</td>
          <td>装配率(数量比）≥50%</td>
          <td>1</td>
          <td>{{design._2_2_4[5].indicator}}%</td>
          <td>{{design._2_2_4[5].score}}</td>
          <td>{{design._2_2_4[5].description}}</td>
        </tr>
      </table>

      <div class="table-title">2.2.5 建筑集成技术设计评分</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11%">评价项目</th>
          <th width="35%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td rowspan="3">1</td>
          <td rowspan="3">外维护结构集成技术</td>
          <td>采用预制结构墙板、保温、外饰面一体化外维护系统，满足结构、保温、防渗、装饰要求。</td>
          <td>4</td>
          <td>{{design._2_2_5[0].options[0].satisfy===true?'是':'否'}}</td>
          <td rowspan="3">{{design._2_2_5[0].score}}</td>
          <td rowspan="3">{{design._2_2_5[0].description}}</td>
        </tr>
        <tr align="center">
          <td>采用预制结构墙板、保温或外饰面一体化外维护系统，满足结构、保温、防渗、装饰要求</td>
          <td>2</td>
          <td>{{design._2_2_5[0].options[1].satisfy===true?'是':'否'}}</td>
        </tr>
        <tr align="center">
          <td>未采用外维护结构集成技术</td>
          <td>0</td>
          <td>{{design._2_2_5[0].options[2].satisfy===true?'是':'否'}}</td>
        </tr>

        <tr align="center">
          <td>2</td>
          <td>室内装修集成技术</td>
          <td>项目室内装修与建筑结构、机电设备一体化设计，采用管线与结构分离等系统集成技术</td>
          <td>3</td>
          <td>{{design._2_2_5[1].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_5[1].score}}</td>
          <td>{{design._2_2_5[1].description}}</td>
        </tr>

        <tr align="center">
          <td>3</td>
          <td>机电设备集成技术</td>
          <td>机电设备管线系统采用集中布置，管线及点位预留、预埋到位</td>
          <td>2</td>
          <td>{{design._2_2_5[2].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_5[2].score}}</td>
          <td>{{design._2_2_5[2].description}}</td>
        </tr>
      </table>

      <div class="table-title">2.2.6 设计深度相关</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>具有完整的构件深化图，主要包括：设计说明、构件统计表、连接节点详图、构件加工详图、预埋件详图。</td>
          <td>2</td>
          <td>{{design._2_2_6[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[0].score}}</td>
          <td>{{design._2_2_6[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>构件深化图要满足工厂生产、施工装配等相关环节承接工序的技术和安全要求，各种埋件、连接件设计准确、清晰、合理。</td>
          <td>1</td>
          <td>{{design._2_2_6[1].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[1].score}}</td>
          <td>{{design._2_2_6[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>构件设计与构件生产工业结合良好，与构件生产工厂建立有协同工作机制。</td>
          <td>1</td>
          <td>{{design._2_2_6[2].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[2].score}}</td>
          <td>{{design._2_2_6[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>项目设计与施工组织紧密结合，与施工企业建立有协同工作机制。</td>
          <td>1</td>
          <td>{{design._2_2_6[3].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[3].score}}</td>
          <td>{{design._2_2_6[3].description}}</td>
        </tr>
        <tr align="center">
          <td>5</td>
          <td>构件设计合理、规格尺寸优化、便于生产制作，有利于提高工效、降低成本</td>
          <td>1</td>
          <td>{{design._2_2_6[4].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[4].score}}</td>
          <td>{{design._2_2_6[4].description}}</td>
        </tr>
        <tr align="center">
          <td>6</td>
          <td>构件连接技术安全可靠、构造合理、施工简便</td>
          <td>1</td>
          <td>{{design._2_2_6[5].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[5].score}}</td>
          <td>{{design._2_2_6[5].description}}</td>
        </tr>
        <tr align="center">
          <td>7</td>
          <td>构件设计满足构件运输和吊装能力要求，便于安装施工</td>
          <td>1</td>
          <td>{{design._2_2_6[6].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[6].score}}</td>
          <td>{{design._2_2_6[6].description}}</td>
        </tr>
        <tr align="center">
          <td>8</td>
          <td>满足不同施工外界条件的影响以及模板和支撑系统的采用</td>
          <td>1</td>
          <td>{{design._2_2_6[7].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[7].score}}</td>
          <td>{{design._2_2_6[7].description}}</td>
        </tr>
        <tr align="center">
          <td>9</td>
          <td>构件设计综合考虑了装配化施工的安装调节和公差配合要求</td>
          <td>1</td>
          <td>{{design._2_2_6[8].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_6[8].score}}</td>
          <td>{{design._2_2_6[8].description}}</td>
        </tr>
      </table>

      <div class="table-title">2.2.7 一体化装修设计</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11%">评价项目</th>
          <th width="35%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>设计深度</td>
          <td>具有完整的室内装饰装修设计方案，设计深度满足施工要求。</td>
          <td>4</td>
          <td>{{design._2_2_7[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_7[0].score}}</td>
          <td>{{design._2_2_7[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>协同设计</td>
          <td>装修设计与主体结构、机电设备设计紧密结合，并建立协同工作机制。</td>
          <td>3</td>
          <td>{{design._2_2_7[1].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_7[1].score}}</td>
          <td>{{design._2_2_7[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>设计方法</td>
          <td>装修设计采用标准化、模数化设计；各构件、部品与主体结构之间的尺寸匹配、协调，提前预留、预埋接口，易于装修工程的装配化施工；墙、地面块材铺装基本保证现场无二次加工。</td>
          <td>3</td>
          <td>{{design._2_2_7[2].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_7[2].score}}</td>
          <td>{{design._2_2_7[2].description}}</td>
        </tr>
      </table>

      <div class="table-title">2.2.8 信息化技术应用设计</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11%">评价项目</th>
          <th width="35%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>方案设计</td>
          <td>应用信息技术（BIM）进行方案设计，包括项目总体分析、性能分析、方案优化等。</td>
          <td>2</td>
          <td>{{design._2_2_8[0].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_8[0].score}}</td>
          <td>{{design._2_2_8[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>施工图设计</td>
          <td>应用信息技术（BIM）进行施工图设计，包括专业协同、管线综合、信息模型制作、施工图信息表达等</td>
          <td>2</td>
          <td>{{design._2_2_8[1].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_8[1].score}}</td>
          <td>{{design._2_2_8[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>构件图设计</td>
          <td>应用信息技术（BIM）进行构件深化设计，包括连接节点设计、钢筋碰撞检查、构件信息模型，完成构件图信息表达等。</td>
          <td>1</td>
          <td>{{design._2_2_8[1].satisfy===true?'是':'否'}}</td>
          <td>{{design._2_2_8[1].score}}</td>
          <td>{{design._2_2_8[1].description}}</td>
        </tr>
      </table>

      <!-- 建造阶段 -->
      <div class="table-title">3.2.1 预制构件生产制作及质量控制</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>构件生产企业具备相应的生产工艺设备和完善的质量管理体系</td>
          <td>4</td>
          <td>{{construct._3_2_1[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_1[0].score}}</td>
          <td>{{construct._3_2_1[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>构件生产过程具有相应的技术标准、工艺流程和作业指导要求</td>
          <td>4</td>
          <td>{{construct._3_2_1[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_1[1].score}}</td>
          <td>{{construct._3_2_1[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>参评项目监理方驻厂监督构件生产过程，有完整的质量验收记录</td>
          <td>3</td>
          <td>{{construct._3_2_1[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_1[2].score}}</td>
          <td>{{construct._3_2_1[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>工厂生产构件标注构件编号、制作日期、合格状态、生产单位信息等</td>
          <td>3</td>
          <td>{{construct._3_2_1[3].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_1[3].score}}</td>
          <td>{{construct._3_2_1[3].description}}</td>
        </tr>
        <tr align="center">
          <td>5</td>
          <td>构件各项性能指标符合设计要求，具有出厂检验报告、进场验收记录</td>
          <td>2</td>
          <td>{{construct._3_2_1[4].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_1[4].score}}</td>
          <td>{{construct._3_2_1[4].description}}</td>
        </tr>
        <tr align="center">
          <td>6</td>
          <td>构件质量符合国家现行有关标准要求</td>
          <td>2</td>
          <td>{{construct._3_2_1[5].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_1[5].score}}</td>
          <td>{{construct._3_2_1[5].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.2 预制构件运输管理</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>参评项目具备合理运输管理组织方案，内容包括运输时间、次序、运输路线、固定要求、堆放支垫及成品保护措施，且减少二次倒运和现场堆放</td>
          <td>3</td>
          <td>{{construct._3_2_2[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_2[0].score}}</td>
          <td>{{construct._3_2_2[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>构件运输和临时存放过程中具有专门的质量安全保证措施，对尺寸较大、形状特殊的大型预制构件的运输和存放措施具体、明确</td>
          <td>2</td>
          <td>{{construct._3_2_2[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_2[1].score}}</td>
          <td>{{construct._3_2_2[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>构件运输进场具有交接验收记录</td>
          <td>2</td>
          <td>{{construct._3_2_2[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_2[2].score}}</td>
          <td>{{construct._3_2_2[2].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.3 装配化施工组织与管理</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>参评项目具有工程总承包管理模式和专业化的施工队伍</td>
          <td>1</td>
          <td>{{construct._3_2_3[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_3[0].score}}</td>
          <td>{{construct._3_2_3[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>参评项目具备完整的施工组织方案，内容包括构件安装工程进场、场地、材料、人员、机械的组织，以及相应的质量、环境、安全管理措施</td>
          <td>3</td>
          <td>{{construct._3_2_3[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_3[1].score}}</td>
          <td>{{construct._3_2_3[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>参评项目具备完整的装配化施工工法或技术标准</td>
          <td>2</td>
          <td>{{construct._3_2_3[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_3[2].score}}</td>
          <td>{{construct._3_2_3[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>参评项目采用机械化施工，减少人力成本，并明显提高效率</td>
          <td>2</td>
          <td>{{construct._3_2_3[3].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_3[3].score}}</td>
          <td>{{construct._3_2_3[3].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.4 装配化施工技术与工艺</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>参评项目具备构件安装专项技术方案，内容包括构件成品保护、存放、翻转、起吊、定位、稳固、连接等技术措施和质量、安全控制措施</td>
          <td>2</td>
          <td>{{construct._3_2_4[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[0].score}}</td>
          <td>{{construct._3_2_4[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>构件连接技术施工方便、安全可靠，连接技术系统性强、经济适用，符合国家现行有关标准规定</td>
          <td>2</td>
          <td>{{construct._3_2_4[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[1].score}}</td>
          <td>{{construct._3_2_4[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>外墙、内墙、顶棚基本实现无抹灰</td>
          <td>2</td>
          <td>{{construct._3_2_4[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[2].score}}</td>
          <td>{{construct._3_2_4[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>外墙减少外脚手架施工，室内采用工具式、定型化安全支撑措施</td>
          <td>2</td>
          <td>{{construct._3_2_4[3].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[3].score}}</td>
          <td>{{construct._3_2_4[3].description}}</td>
        </tr>
        <tr align="center">
          <td>5</td>
          <td>采用工具式、定型化模板及支撑系统，可重复使用30次以上</td>
          <td>2</td>
          <td>{{construct._3_2_4[4].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[4].score}}</td>
          <td>{{construct._3_2_4[4].description}}</td>
        </tr>
        <tr align="center">
          <td>6</td>
          <td>采用吊车满足100mm以下微动性的要求，有分配梁或分配桁架的吊具</td>
          <td>2</td>
          <td>{{construct._3_2_4[5].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[5].score}}</td>
          <td>{{construct._3_2_4[5].description}}</td>
        </tr>
        <tr align="center">
          <td>7</td>
          <td>项目所用成型钢筋、钢筋网片、钢筋桁架等由工厂加工制作</td>
          <td>2</td>
          <td>{{construct._3_2_4[6].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[6].score}}</td>
          <td>{{construct._3_2_4[6].description}}</td>
        </tr>
        <tr align="center">
          <td>8</td>
          <td>各机电设备管线预埋到位、采用机械连接方式</td>
          <td>2</td>
          <td>{{construct._3_2_4[7].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_4[7].score}}</td>
          <td>{{construct._3_2_4[7].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.5 装配化施工质量</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>全部主控项目的构件连接部位均进行实体抽样检测，检测结果符合设计要求</td>
          <td>3</td>
          <td>{{construct._3_2_5[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_5[0].score}}</td>
          <td>{{construct._3_2_5[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>按国家现行有关标准的规定进行了工程质量验收，并且达到国家现行有关装配式结构工程验收标准的合格要求</td>
          <td>2</td>
          <td>{{construct._3_2_5[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_5[1].score}}</td>
          <td>{{construct._3_2_5[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>构件、灌浆料强度检测报告、主要材料及配件的质量证明文件、进场验收记录，资料齐全、详实、可靠</td>
          <td>2</td>
          <td>{{construct._3_2_5[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_5[2].score}}</td>
          <td>{{construct._3_2_5[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>构件安装施工记录、钢筋连接施工检验记录、钢结构建筑的主体结构连接螺栓或焊接节点检验记录，资料齐全、详实、可靠</td>
          <td>2</td>
          <td>{{construct._3_2_5[3].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_5[3].score}}</td>
          <td>{{construct._3_2_5[3].description}}</td>
        </tr>
        <tr align="center">
          <td>5</td>
          <td>后浇混凝土部位、后装封闭构件施工前的隐蔽工程检查验收文件，资料齐全、详实、可靠</td>
          <td>2</td>
          <td>{{construct._3_2_5[4].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_5[4].score}}</td>
          <td>{{construct._3_2_5[4].description}}</td>
        </tr>
        <tr align="center">
          <td>6</td>
          <td>装配式结构分项工程质量验收文件，资料齐全、详实、可靠</td>
          <td>2</td>
          <td>{{construct._3_2_5[5].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_5[5].score}}</td>
          <td>{{construct._3_2_5[5].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.6 一体化装修技术与施工工艺</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>具备装修施工组织设计，体现部品的工厂生产与现场施工工序、部品的生产工艺与施工安装工艺的协调配合</td>
          <td>3</td>
          <td>{{construct._3_2_6[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_6[0].score}}</td>
          <td>{{construct._3_2_6[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>各部件与部品之间、部品与主体结构之间采用装配化施工工艺，各工序偏差控制在设计要求范围内</td>
          <td>2</td>
          <td>{{construct._3_2_6[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_6[1].score}}</td>
          <td>{{construct._3_2_6[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>采用工厂生产的集成式厨房、卫生间，一次安装到位</td>
          <td>2</td>
          <td>{{construct._3_2_6[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_6[2].score}}</td>
          <td>{{construct._3_2_6[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>采用内隔墙板系统，与主体结构连接可靠，易于安装拆卸</td>
          <td>2</td>
          <td>{{construct._3_2_6[3].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_6[3].score}}</td>
          <td>{{construct._3_2_6[3].description}}</td>
        </tr>
        <tr align="center">
          <td>5</td>
          <td>水、暖、电气等设备系统与主体结构的构件生产、装配施工协调配合</td>
          <td>2</td>
          <td>{{construct._3_2_6[4].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_6[4].score}}</td>
          <td>{{construct._3_2_6[4].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.7 室内装修工程</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="45%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>非承重内隔墙采用装配施工技术，现场无湿作业和二次施工</td>
          <td>2</td>
          <td>{{construct._3_2_7[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_7[0].score}}</td>
          <td>{{construct._3_2_7[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>墙和地面瓷砖、石材等装修材料工厂加工编号，无现场切割</td>
          <td>1</td>
          <td>{{construct._3_2_7[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_7[1].score}}</td>
          <td>{{construct._3_2_7[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>各种柜体、内门等木制品和木装饰采用工厂定制，无现场切割</td>
          <td>1</td>
          <td>{{construct._3_2_7[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_7[2].score}}</td>
          <td>{{construct._3_2_7[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>各种设备管线，连接部位提前预留接口、孔洞，无现场剔凿</td>
          <td>1</td>
          <td>{{construct._3_2_7[3].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_7[3].score}}</td>
          <td>{{construct._3_2_7[3].description}}</td>
        </tr>
        <tr align="center">
          <td>5</td>
          <td>采用预拌砂浆、预拌混凝土或其它工业化产品</td>
          <td>2</td>
          <td>{{construct._3_2_7[4].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_7[4].score}}</td>
          <td>{{construct._3_2_7[4].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.8 信息化管理</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11">评价项目</th>
          <th width="35%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>设计阶段</td>
          <td>采用基于建筑信息模型技术的设计软件，每个构件有唯一的身份标识，按照相关标准，将设计信息传递给后续环节。</td>
          <td>2</td>
          <td>{{construct._3_2_8[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_8[0].score}}</td>
          <td>{{construct._3_2_8[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>生产阶段</td>
          <td>建立构件生产管理系统，建立构件生产信息数据库，用于记录构件生产关键信息，追朔、管理构件的生产质量、生产进度。</td>
          <td>2</td>
          <td>{{construct._3_2_8[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_8[1].score}}</td>
          <td>{{construct._3_2_8[1].description}}</td>
        </tr>
        <tr align="center">
          <td>3</td>
          <td>施工阶段</td>
          <td>建立构件施工管理系统，将设计阶段信息模型与时间、成本信息关联整合，进行管理；结合构件中的身份识别标识，记录构件吊装、施工关键信息，追朔、管理构件施工质量、施工进度等，实现施工过程精细化管理。</td>
          <td>2</td>
          <td>{{construct._3_2_8[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_8[2].score}}</td>
          <td>{{construct._3_2_8[2].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.9 资源节约与环保效果</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11">评价项目</th>
          <th width="35%">评价指标及要求</th>
          <th width="11%">设定分值</th>
          <th width="11%">是否满足</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>节能效果</td>
          <td>制定并实施施工节能和用能方案，检查并记录施工能耗，与传统方式相比，现场施工能耗指标节约明显。</td>
          <td>3</td>
          <td>{{construct._3_2_9[0].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_9[0].children_question[0].score}}</td>
          <td>{{construct._3_2_9[0].children_question[0].description}}</td>
        </tr>
        <tr align="center">
          <td>2</td>
          <td>节水效果</td>
          <td>制定并实施施工节水与用水方案，检测并记录施工水耗，与传统方式相比，现场施工节约用水指标达到50%以上。</td>
          <td>3</td>
          <td>{{construct._3_2_9[1].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_9[1].children_question[0].score}}</td>
          <td>{{construct._3_2_9[1].children_question[0].description}}</td>
        </tr>
        <tr align="center">
          <td rowspan="3">3</td>
          <td rowspan="3">节材效果</td>
          <td>采用工厂化钢筋加工方法，降低现场加工的钢筋损耗率，采用工厂加工的钢筋不低于80%，钢筋损耗不大于2.0%。</td>
          <td>2</td>
          <td>{{construct._3_2_9[2].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_9[2].children_question[0].score}}</td>
          <td>{{construct._3_2_9[2].children_question[0].description}}</td>
        </tr>
        <tr align="center">
          <td>钢结构建筑采用无模板和无支撑式楼面板施工，采用预制成品楼板或钢筋桁架式组合楼板。</td>
          <td>2</td>
          <td>{{construct._3_2_9[2].children_question[1].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_9[2].children_question[1].score}}</td>
          <td>{{construct._3_2_9[2].children_question[1].description}}</td>
        </tr>
        <tr align="center">
          <td>最大限度地采用预制构件，减少预拌混凝土的损耗，混凝土的损耗率不大于1.5%。</td>
          <td>5</td>
          <td>{{construct._3_2_9[2].children_question[2].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_9[2].children_question[2].score}}</td>
          <td>{{construct._3_2_9[2].children_question[2].description}}</td>
        </tr>
        <tr align="center">
          <td>4</td>
          <td>环保效果</td>
          <td>施工现场有整洁检查计划、检查记录和专人负责；施工现场有建筑垃圾控制计划和专人负责；施工垃圾减少50%以上；施工噪声不高于现行国家标准《建筑施工场界环境噪声排放标准》GB12532相关规定。</td>
          <td>4</td>
          <td>{{construct._3_2_9[3].children_question[0].satisfy===true?'是':'否'}}</td>
          <td>{{construct._3_2_9[3].children_question[0].score}}</td>
          <td>{{construct._3_2_9[3].children_question[0].description}}</td>
        </tr>
      </table>

      <div class="table-title">3.2.10 现场施工人工用量</div>
      <table cellpadding="10" cellspacing="0" width="100%">
        <tr class="table-head" align="center">
          <th width="7%">序号</th>
          <th width="11">评价指标</th>
          <th width="35%">指标数值</th>
          <th width="11%">设定分值</th>
          <th width="11%">减少比例</th>
          <th width="10%">得分</th>
          <th>不满足简述</th>
        </tr>
        <tr align="center">
          <td rowspan="4">1</td>
          <td rowspan="4">单位建筑面积人工用量减少比例。</td>
          <td>单位建筑面积人工用量减少50%以上.</td>
          <td>6</td>
          <td rowspan="4">{{construct._3_2_10[0].indicator}}%</td>
          <td rowspan="4">{{construct._3_2_10[0].score}}</td>
          <td rowspan="4">{{construct._3_2_10[0].description}}</td>
        </tr>
        <tr align="center">
          <td>单位建筑面积人工用量减少40%~50%</td>
          <td>5</td>
        </tr>
        <tr align="center">
          <td>单位建筑面积人工用量减少20%~40%</td>
          <td>4</td>
        </tr>
        <tr align="center">
          <td>单位建筑面积人工用量减少10%~20%以上</td>
          <td>3</td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import { getHistory } from "@/api/projects";
import { mapGetters } from "vuex";

export default {
  name: 'detail',
  props: {
    eId: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      fullscreenLoading: true,
      fullscreenLoading: false,
      design: {},
      construct: {},
      usage: {}
    };
  },
  computed: {
    ...mapGetters(["userId"])
  },
  mounted () {
    this.fetchData(this.eId)
  },
  methods: {
    fetchData (eId) {
      getHistory({
        userId: this.userId,
        eId: eId
      })
        .then(response => {
          this.design = response.value.score.design;
          this.construct = response.value.score.construct;
          this.usage = response.value.score.usage;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 3000);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>


<style lang="scss" scoped>
@mixin clearfix {
  &:before {
    display: table;
    content: "";
    clear: both;
  }

  &:after {
    display: table;
    content: "";
    clear: both;
  }
}

.main-article {
  // padding: 20px;
  padding: 40px;
  margin: 0 auto;
  // display: block;
  // width: 740px;
  width: 900px;
  background: #fff;
  font-family: "simsun";

  table,
  table tr th,
  table tr td {
    border: 1px solid #626567;
  }

  .main-title {
    font-family: "simsun";
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
    margin: 20px auto 30px auto;
  }

  .types {
    display: inline-block;
    padding: 0 20px;
  }
  .table-title {
    font-family: "simsun";
    font-size: 1.2em;
    text-align: left;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 80px;
  }

  .table-head {
    height: 10px;
  }
}
</style>
