import {Component} from "angular2/core";
import {SinglequeryComponent} from "../singlequery/singlequery.component";

@Component({
	selector: 'bool-query',
	templateUrl: './app/build/boolquery/boolquery.component.html',
	styleUrls: ['./app/build/boolquery/boolquery.component.css'],
	inputs: ['mapping', 'config', 'query', 'queryList', 'addQuery', 'removeQuery', 'addBoolQuery'],
	directives: [BoolqueryComponent, SinglequeryComponent]
})

export class BoolqueryComponent {
	public mapping;
	public config;
	public queryList = this.queryList;
	public addQuery;
	public addBoolQuery;
	public removeQuery;
	public removeArray = [];
	public query = this.query;

	addSubQuery(id) {
		this.addBoolQuery(id);
	}
	removeInQuery(id: number) {
		var resulQueries = this.mapping.resultQuery.result;
		this.removeArray.push(id);
		var removeFlag = true;
		resulQueries.forEach(function(v, i) {
			if(v.parent_id == id) {
				this.removeInQuery(v.id);
				removeFlag = false;
			}
		}.bind(this));

		if (removeFlag) {
			this.removeArray.forEach(function(remove_q){
				resulQueries.forEach(function(v, i) {
					if (v.id == remove_q) {
						resulQueries.splice(i, 1);
					}
				}.bind(this));				
			}.bind(this));
		}
	}
	analyzeTest() {
		var self = this;
		setTimeout(function() {
			var field = self.mapping.resultQuery.availableFields[self.query.field];
			self.query.analyzeTest = field.index === 'not_analyzed' ? 'not_analyzed' : 'analyzed'; 
			self.query.type = field.type;
		},300);
	}
}