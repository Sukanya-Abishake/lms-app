import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CourseSearch from './CourseSearch.js';
import CourseTable from './CourseTable.js';


class FilterCourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { category: '', credits: '', name: '', startdate: '', enddate: '', refreshResult:true}
        this.setCreditFilter = this.setCreditFilter.bind(this);
        this.setCourseNameFilter = this.setCourseNameFilter.bind(this);
        this.setCourseCategoryFilter = this.setCourseCategoryFilter.bind(this);
        this.setStartDateRangeFilter = this.setStartDateRangeFilter.bind(this);
        this.setEndDateRangeFilter = this.setEndDateRangeFilter.bind(this);
        this.setRefreshResult = this.setRefreshResult.bind(this);
    }
  
    setCreditFilter(value)
    {
       
        this.setState({ credits: value });
       
    }
    setRefreshResult(value)
    {
       
        this.setState({ refreshResult: value });
        
        console.log("refreshResult in filtertable: " + value);

    }
    setCourseNameFilter(value) {
        this.setState({ name: value });
        //alert("name: " + value);

    }
    setCourseCategoryFilter(value) {
        this.setState({ category: value });
        //alert("category: " + value);
    }
    setStartDateRangeFilter(sdate) {
        this.setState({ startdate: sdate });
        //alert("startdate: " + sdate);
    }
    setEndDateRangeFilter( edate) {
        this.setState({ enddate: edate });
        //alert("enddate: " + edate);
    }
    
    render() {
       
            return (
                <div>

                    <CourseSearch setCourseNameFilter={this.setCourseNameFilter} setCourseCategoryFilter={this.setCourseCategoryFilter}
                        setCreditFilter={this.setCreditFilter} setCourseStartDateFilter={this.setStartDateRangeFilter}
                        setCourseEndDateFilter={this.setEndDateRangeFilter} refreshResult={this.state.refreshResult} setRefreshResult={this.setRefreshResult} />
                    <CourseTable courseNameFilter={this.state.name} courseCategoryFilter={this.state.category}
                        courseCreditsFilter={this.state.credits} courseStartDateFilter={this.state.startdate}
                        courseEndDateFilter={this.state.enddate} courses={this.props.courses} refreshResult={this.state.refreshResult} setRefreshResult={this.setRefreshResult} />;
                </div>
            );
        
    }
}
export default FilterCourseTable;
