from django.contrib import admin

from project.models.project import Category,Project,RequestForm
from project.models.document import DocumentProject,DocumentAction,DocumentInvestment,DocumentBond
from project.models.action import Action
from project.models.bond import Bond
from project.models.investment import Investment

# Register your models here.

admin.site.register(Category)
admin.site.register(Project)
admin.site.register(RequestForm)

admin.site.register(DocumentProject)
admin.site.register(DocumentAction)
admin.site.register(DocumentInvestment)
admin.site.register(DocumentBond)

admin.site.register(Action)
admin.site.register(Bond)
admin.site.register(Investment)
