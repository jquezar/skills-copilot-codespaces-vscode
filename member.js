function skillsMember()  {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberControler',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }

    };
}            