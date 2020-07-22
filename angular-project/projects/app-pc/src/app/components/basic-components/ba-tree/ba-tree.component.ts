import { Component, OnInit, Input, EventEmitter, QueryList, Output, ViewChildren, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ba-tree',
  templateUrl: './ba-tree.component.html',
  styleUrls: ['./ba-tree.component.scss']
})
export class BaTreeComponent implements OnInit, OnChanges {
  @Input() rawData: any = [];            // 原始绑定数据：树状结构
  @Input() isRoot = true;     // 是否是根节点
  @Input() treeData: any = [];           // 当前绑定数据：树状结构
  @Input() collapse: boolean;            // 是否展开子节点
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNodeSelect = new EventEmitter<any>();  // 选择节点事件
  @ViewChildren('childTree') childTree: QueryList<BaTreeComponent>;
  constructor() {
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.treeData) {
      if (this.isRoot) {      // 如是根节点:rawData与treeData指向同一数据对象
        this.rawData = changes.treeData.currentValue;
      }
    }
  }

  ngOnInit() {
  }

  // 点击节点响应，并抛出选择节点切换事件
  select(node) {
    node.expand = !node.expand;
    this.rawData.forEach(item => {
      this.setChildrenActive(item);
    });
    node.active = true;
    this.onNodeSelect.emit(node);
  }
  // 通过递归，设置激活节点，并deactivate其它节点
  setChildrenActive(node) {
    node.active = false;
    if (node.children) {
      node.children.forEach(item => {
        this.setChildrenActive(item);
      });
    }
  }

}
